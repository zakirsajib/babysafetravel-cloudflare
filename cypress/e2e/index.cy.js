it('titles are correct', () => {
  const page = cy.visit('https://babysafetravel-cloudflare.pages.dev/');

  page.get('title').should('have.text', 'Home Page | Baby Safe Travel')
  page.get('h1').should('have.text', 'Baby Safe Travel');
});


it('robots.txt exists', () => {
  const robotsTxtUrl = `${window.location.origin}/robots.txt`;

  cy.request(robotsTxtUrl).then((response) => {
    // Check if the response status code is 200 (OK)
    expect(response.status).to.eq(200);
  });
});
