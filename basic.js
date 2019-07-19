const assert = require('assert');
const {url} = require('url');
const path = require('path');

describe('Bubble', () => {
    

    it('Lop-lop-lop', () => {
        browser.url('https://task1-bvckdxdkxw.now.sh/');
        browser.maximizeWindow();
        browser.pause(5000);
        const bubble = $$("div.bubble");
        quantity = bubble.length;
        
        for (i=0; i < quantity; i++) {
        bubble[i].click();
        }
        const expect = $("div#score");
       
        assert.equal(expect.getText(), quantity);
    });

        it('Lop-lop-lop-bonus', () => {
        browser.url('https://task1-bvckdxdkxw.now.sh/');
        browser.maximizeWindow();
       
        for (; ; ) {
            $("div.bubble").waitForDisplayed(1000);
            const bubble = $("div.bubble");
                   bubble.click();
        }

    });
});