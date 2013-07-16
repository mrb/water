(ns water.core
  (:require [cljs.core.async :refer [chan close! timeout]])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(defn make-noise
  [w h canvas-element]
  (let [canvas  (.getElementById js/document canvas-element)
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

(go (loop [] (<! (timeout 1)) (make-noise 500 500 "w") (recur)))
