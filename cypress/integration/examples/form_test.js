

describe('Pizza form', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3001/form')
    });

    const nameInput = () => cy.get('input[name="name"]')
    const pepperoniBox = () => cy.get('input[name="topping1"]')
    const peppersBox = () => cy.get('input[name="topping4"]')
    const submitBtn = () => cy.get('button')


    it('type in the name', ()=> {
        nameInput().type('Jakobi');
        nameInput().should('have.value','Jakobi')
    });

    it('click on the toppings',() =>{
        pepperoniBox().click();
        pepperoniBox().should('have.value','pepperoni');
        peppersBox().click();
        peppersBox().should('have.value','peppers');
    })

    it('click submit works', () => {
        nameInput().type('Jakobi')
        submitBtn().click()
        
    })
    
})