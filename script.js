document.getElementById('invoiceForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent traditional form submission
    alert('Invoice has been sent successfully!');
    // Here you can add AJAX/Fetch API submission logic
};
