// ==UserScript==
// @name         EPNET
// @namespace    EPFL
// @description  A script to improve browsing on network.epfl.ch
// @include      https://network.epfl.ch/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author       ponsfrilus
// @downloadURL  https://raw.githubusercontent.com/ponsfrilus/EPFL_EPNET_UserScript/master/EPFL_EPNET.user.js
// @version      0.0.1
// ==/UserScript==
 
// Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready( function() {
  console.log("EPNET User script");
  
  // Insert the lookup field
  $( '[name="inst"]' ).before( '<input type="text" name="lookup" value="" placeholder="Unit search" /><br />' );
  
  // Makes the lookup filter
  $( '[name="lookup"]' ).keyup( function () {
    $lookup = $( this ).val().toUpperCase();
    if ($lookup.length > 2) {
      $( '[name="inst"] > option' ).each( function( index ) {
        if ($( this ).text().includes($lookup)) {
          $( this ).css( "color", "green" ).show();
        } else {
          $( this ).css( "color", "black" ).hide();
        }
      });
    }
  })
});
