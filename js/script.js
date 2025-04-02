// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculatevolume() {
  // input
  const radius = parseInt(document.getElementById('radius-m').value);
    

  // process
    const spherevolume = 4/3 * Math.PI * (radius * radius * radius)

  // output
  document.getElementById('volume').innerHTML = 'The Volume is:' + spherevoulume + 'mm³'
}

