// Created by: Lucas Tyman
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")

/**
 * This function displays an alert.
 */
function check() {
  // input
  const integer = parseFloat(document.getElementById("integer").value)

  // process and output
  if (integer > 0) {
    document.getElementById("answer").innerHTML = "Your number is positive!"
  } else {
    document.getElementById("answer").innerHTML = "Your number is negative!"
  }
}