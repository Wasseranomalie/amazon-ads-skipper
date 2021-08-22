let observer = new MutationObserver(() => {
    let skipButtonElements = document.querySelectorAll(".adSkipButton, .skippable");
    if (skipButtonElements.length > 0) {
        skipButtonElements.item(0).click();
        console.log('Skipped ad');
    }
});
observer.observe(document.body, {
    childList: true
    , subtree: true,
    attributeFilter: ['class']
});
