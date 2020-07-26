const accordeon1 = new accComponent({
    panels: '.block_panel',
    hidePanels: '.hidden_panel',
    openIs: 'vertical'
});

const accordeon2 = new accComponent({
    panels: '.block_panel2',
    hidePanels: '.hidden_panel2',
    accordeon: '.accordeon2',
    openIs: 'horizontal'
});

accordeon1.start();
accordeon2.start();