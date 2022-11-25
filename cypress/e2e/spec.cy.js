describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000')
    it("get user request", function(){
      cy.request({
          method : 'GET',
          url : 'https://gorest.co.in/public/v2/users',
          headers : {'Authorization' : 'Bearer ' + accesstaken
          }
      }).then((res)=>{
          expect(res.status).to.eql(200)
      })
   })
  })
})