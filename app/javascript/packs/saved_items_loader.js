import '../src/loader.scss'
import '../src/loader.js'
import { getElementsList, persistAdditionalNotes, removeAllFromMetadata,
         removeDatasetFromMetadata, removeFromMetadata, validateDateRange } from '../src/basket.js'
import $ from 'jquery'

window.loader = new GOVUK.Loader()

$(document).ready(function() {
  $('#govuk-box-message').show()
  window.loader.init({
    container: 'govuk-box-message',
    label: true,
    labelText: 'Your data is being loaded'
  })

  var selectedElements = getElementsList()

  var token = document.querySelector('meta[name="csrf-token"]').content
  $.ajax({
    type: 'POST',
    url: location.pathname.replace(/saved_items/, 'saved_items/saved_items'),
    data: { elements: selectedElements },
    dataType: 'html',
    headers: {
      'X-CSRF-Token': token
    },
    success: function(response, status, xhr) {
      setTimeout(function() {
        $('#govuk-box-message').hide()
        window.loader.stop()
        $('.saved_items_table').html(response)
        document.querySelectorAll('.years-required').forEach(function(element) {
          element.addEventListener('change', validateDateRange)
          element.dispatchEvent(new Event('change'))
        })
        document.querySelectorAll('.additional-notes').forEach(function(element) {
          element.addEventListener('change', persistAdditionalNotes)
        })
        document.querySelectorAll('.item-remove').forEach(function(element) {
          element.addEventListener('click', removeFromMetadata)
        })
        document.querySelectorAll('.dataset-remove').forEach(function(element) {
          element.addEventListener('click', removeDatasetFromMetadata)
        })

        if(document.querySelector('#remove-all')) {
          document.querySelector('#remove-all').addEventListener('click', removeAllFromMetadata)
        }
      }, 500)
    }
  })
})

