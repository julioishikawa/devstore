describe('add product to cart', () => {
  beforeEach(() => {
    // Opção baseUrl
    // cy.visit('/')
    cy.visit('http://localhost:3000')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    // cy.url().should('include', '/product')
    // ou ↓
    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.get('input[name=q').type('moletom').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a two same products and add it to the cart', () => {
    cy.get('input[name=q').type('moletom').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.get('input[name=q').parent('form').submit()

    cy.get('a[href^="/product"]').eq(1).click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (2)').should('exist')
  })

  it('should be able to search for a two differents products and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').eq(2).click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.get('input[name=q').clear().type('camiseta').parent('form').submit()

    cy.get('a[href^="/product"]').eq(0).click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (2)').should('exist')
  })
})
