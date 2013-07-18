(defproject water "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1835"]
                 [core.async "0.1.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {
    :builds [{
      :id "water"
      :source-paths ["src/water"]
      :compiler {
        :output-to "main.js"
        :optimizations :whitespace
        :pretty-print true}}
              {
      :id "water-adv"
      :source-paths ["src/water"]
      :compiler {
        :output-to "main-adv.js"
        :optimizations :advanced}}]})
