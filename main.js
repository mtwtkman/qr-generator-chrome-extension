chrome.tabs.query(
    {currentWindow: true, active: true},
    tabs => new QRious({
        element: document.getElementById('qr'),
        value: tabs[0].url,
        size: 200,
    }),
);
