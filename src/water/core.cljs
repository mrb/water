(ns water.core
  (:refer-clojure :exclude [rand-int])
  (:require [cljs.core.async :refer [chan close! timeout]])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(defn rand-int [n]
  (bit-or (* (.random js/Math) n) 0))

(defn make-noise
  [w h canvas-element]
  (let [canvas (.getElementById js/document canvas-element)
        context (.getContext canvas "2d")
        data (.createImageData context w h)
        pixel-data (.-data data)]
    (dotimes [n (* w h)]
      (let [cursor (* 4 n)]
        (aset pixel-data (+ cursor 0) (rand-int 255))
        (aset pixel-data (+ cursor 1) (rand-int 255))
        (aset pixel-data (+ cursor 2) (rand-int 255))
        (aset pixel-data (+ cursor 3) 255)))
    (.putImageData context data 0 0)))

(defn red
  [x]
  (bit-and x 255))

(defn green
  [x]
  (bit-and (bit-shift-right x 8) 255))

(defn blue
  [x]
  (bit-and (bit-shift-right x 16) 255))

(defn alpha
  [x]
  (bit-and (bit-shift-right x 24) 255))

(defn get-pixel
  [x y w b]
  (aget b (+ (* w y) x)))

(defn pack-rgba
  [r g b a]
  (bit-or (bit-shift-left a 24) (bit-shift-left b 16) (bit-shift-left g 8) r))

(defn blur
  [w h from canvas-element]
    (let [from-canvas (.getElementById js/document from)
          from-context (.getContext from-canvas "2d")
          canvas (.getElementById js/document canvas-element)
          context (.getContext canvas "2d")
          data (.getImageData from-context 0 0 w h)
          pixel-data (.-data data)
          buffer (new js/ArrayBuffer (.-length pixel-data))
          buf8 (new js/Uint8ClampedArray buffer)
          buf32 (new js/Uint32Array buffer)]
      (.set buf8 pixel-data)
      (dotimes [iy (- h 2)]
        (dotimes [ix (- w 2)]
          (let [x (inc ix) y (inc iy) xi (inc x) xd (dec x) yi (inc y) yd (dec y)]
            (let [xdyd (get-pixel xd yd w buf32) xyd  (get-pixel x yd w buf32) xiyd (get-pixel xi yd w buf32)
                  xdy  (get-pixel xd y  w buf32) xy   (get-pixel x y  w buf32) xiy  (get-pixel xi y  w buf32)
                  xdyi (get-pixel xd yi w buf32) xyi  (get-pixel x yi w buf32) xiyi (get-pixel xi yi w buf32)]
              (let [rxdyd (red xdyd) gxdyd (green xdyd) bxdyd (blue xdyd)
                    rxyd  (red xyd)  gxyd  (green xyd)  bxyd  (blue xyd)
                    rxiyd (red xiyd) gxiyd (green xiyd) bxiyd (blue xiyd)

                    rxdy  (red xdy)  gxdy  (green xdy)  bxdy  (blue xdy)
                    rxy   (red xy)   gxy   (green xy)   bxy   (blue xy)
                    rxiy  (red xiy)  gxiy  (green xiy)  bxiy  (blue xiy)

                    rxdyi (red xdyi) gxdyi (green xdyi) bxdyi (blue xdyi)
                    rxyi  (red xyi)  gxyi  (green xyi)  bxyi  (blue xyi)
                    rxiyi (red xiyi) gxiyi (green xiyi) bxiyi (blue xiyi)]
                (aset buf32 (+ x (* w y)) (pack-rgba (/ (+ rxdyd rxyd rxiyd rxdy rxy rxiy rxdyi rxyi rxiyi) 9) ;r
                                                     (/ (+ gxdyd gxyd gxiyd gxdy gxy gxiy gxdyi gxyi gxiyi) 9) ;g
                                                     (/ (+ bxdyd bxyd bxiyd bxdy bxy bxiy bxdyi bxyi bxiyi) 9) ;b
                                                     255)))))))                                                ;a
        (.set pixel-data buf8) (.putImageData context data 0 0)))

(def W 320)
(def H 240)

(make-noise W H "w")
(go (loop [] (<! (timeout 10)) (blur W H "w" "w") (recur)))
