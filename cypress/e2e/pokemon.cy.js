describe('Покупка аватара', function () {

    it('НАЗВАНИЕ_ТЕСТ', function () {
         cy.visit('https://pokemonbattle.ru');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__id-texts').contains('4595');
         cy.get('.header__container > .header__id').click({ force: true });
         cy.get('.feature-text > .copy > .copy__text').contains('4595');
         cy.get('[href="/shop"]').click({ force: true });
         cy.get('.pokemon__title').contains('Магазин');
         cy.get('.available > button').first().click({ force: true });
         cy.get('.pay__pay-header-v2').contains('Карта');
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('345345345345345');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1026');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Name Surname');
         cy.get('.pay-btn').click({ force: true });
         cy.get('.payment__fielheader').contains('Подтверждение покупки');
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click({ force: true });
         cy.get('.payment__success1').contains('Покупка прошла успешно');
     })
 }) 