chrome.runtime.onInstalled.addListener(() => {
    console.log('Loaded');
    const rule = {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { schemes: ['http', 'https'] },
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()],
    };
    chrome.declarativeContent.onPageChanged.addRules([rule]);
});
