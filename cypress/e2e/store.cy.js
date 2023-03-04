describe('Тестирование https://testqastudio.me/', function () {
    
    it('Покупка', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина (3)');
        cy.get('.cart-modal > div.cart-panel-content.panel-content > div.modal-header > a > span > svg').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').wait(5000);
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Алексей');
        cy.get('#billing_last_name').type('Янин');
        cy.get('#billing_address_1').type('Мира 53');
        cy.get('#billing_address_2').type('подъезд 2 этаж 15');
        cy.get('#billing_city').type('Волжский');
        cy.get('#billing_state').type('Волгоградская');
        cy.get('#billing_postcode').type('404112');
        cy.get('#billing_phone').type('+79063748251');
        cy.get('#billing_email').type('ill-aleksej-janin@qa.studio');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');

    })
})