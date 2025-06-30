showProducts();

function getAllProjects() {
  const myProjects = [
    {
      projectName: 'Assignment 2 – Form',
      projectDesc:
        'Personal Data Form project built with HTML and CSS, featuring structured fieldsets, input types, and labels to practice form design, layout, and accessibility.',
      projectLink: './Assignment2-Form/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'Assignment 3 – Bakery',
      projectDesc:
        'Responsive bakery website built using HTML and CSS, showcasing menu sections, product displays, and attractive UI layout for a modern bakery business.',
      projectLink: './Assignment3-Bakery/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'Assignment 4 – Fokir',
      projectDesc:
        'Fokir personal portfolio website clone, demonstrating responsive layout, clean sectioning, and CSS styling for professional presentation pages.',
      projectLink: './Assignment4-Fokir/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'Assignment 5 – Mealify',
      projectDesc:
        'Mealify restaurant website landing page developed with HTML and CSS, including responsive sections for menus, chefs, and testimonials with clean design.',
      projectLink: './Assignment5-Mealify/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'Assignment 6 – Devfolio',
      projectDesc:
        'Devfolio personal portfolio template clone built using HTML and CSS, featuring projects showcase, services, and smooth section transitions.',
      projectLink: './Assignment6-Devfolio/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'JS Problem Solving',
      projectDesc:
        'JavaScript problem-solving exercises demonstrating algorithmic logic, array manipulation, and function implementations for practical JS learning.',
      projectLink: './JS-problem-solving/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'Random Quote Generator',
      projectDesc:
        'Random Quote Generator built with HTML, CSS, and JavaScript to display inspirational quotes dynamically with each user interaction.',
      projectLink: './quotes-random-generator/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'Assignment 9 – Bookmarker',
      projectDesc:
        'Bookmarking app developed using HTML, CSS, and JavaScript to store, display, and manage user bookmarks with input validation and local storage.',
      projectLink: './Assignment9-Bookmark/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
    {
      projectName: 'Assignment 10 – Smart Login System',
      projectDesc:
        'Smart Login System built with HTML, CSS, and JavaScript featuring user authentication logic, input validation, and clean responsive design.',
      projectLink: './Assignment10-Login-System/index.html',
      projectThumbnail: '../assets/imgs/thumbnail.svg',
    },
  ];

  return myProjects;
}

function showProducts() {
  const rowData = document.querySelector('.row');
  const allProducts = getAllProjects();
  let productCard = '';
  for (let i = 0; i < allProducts.length; i++) {
    const project = allProducts[i];
    productCard += `
    <div class="col-md-4">
      <div class="card shadow border-0">
        <img src="${project.projectThumbnail}" class="card-img-top img-fluid w-75 mx-auto" alt="project thumbnail image">
        <div class="card-body bg-white">
          <h5 class="card-title">${project.projectName}</h5>
          <p class="card-text">${project.projectDesc}</p>
          <a href="${project.projectLink}" class="btn btn-primary">Live demo</a>
        </div>
      </div>
    </div>
`;
  }

  rowData.innerHTML = productCard;
}
