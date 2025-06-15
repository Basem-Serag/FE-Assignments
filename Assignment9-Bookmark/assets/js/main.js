const siteNameInput = document.getElementById('name');
const siteUrlInput = document.getElementById('url');
const noDataEl = document.getElementById('noDataCaption');
let bookmarksList = [];
getAllBookmarks();
showDataTableList();

function getAllBookmarks() {
  bookmarksList = JSON.parse(localStorage.getItem('bookmarks')) || [];
}

function showDataTableList() {
  toggleNoDataCaption();
  let bookmarkRowItem = '';
  for (let i = 0; i < bookmarksList.length; i++) {
    const bookmarkItem = bookmarksList[i];
    bookmarkRowItem += `
        <tr class="border-top text-center align-middle">
          <th scope="row">${i + 1}</th>
          <td>${bookmarkItem.name}</td>
          <td>             
            <button type="button" onclick="onVisit(${i})" class="btn btn-sm btn-visit">
              <span>
                <i class="fa fa-eye pe-1"></i>
                Visit
              </span>
            </button>
          </td>
          <td>
            <button type="button" onclick="onDelete(${i})" class="btn btn-sm btn-delete">
              <span>
                <i class="fa fa-trash-alt pe-1"></i>
                Delete
              </span>
            </button>
          </td>
        </tr>
      `;
  }
  document.getElementById('table-body').innerHTML = bookmarkRowItem;
}

function onAddBookmark() {
  validateNameInput();
  validateURLInput();

  if (
    siteNameInput.classList.contains('is-invalid') ||
    siteUrlInput.classList.contains('is-invalid')
  ) {
    return;
  }
  const newBookmark = {
    name: siteNameInput.value,
    url: siteUrlInput.value,
  };

  bookmarksList.push(newBookmark);
  resetForm();
  refreshBookmarksList();
  showSuccessAlert();
}

function onDelete(index) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This action cannot be undone!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      bookmarksList.splice(index, 1);
      refreshBookmarksList();
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Your item has been deleted.',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  });
}

function onVisit(index) {
  const bookmarkUrl = bookmarksList[index].url;
  window.open(bookmarkUrl);
}

function refreshBookmarksList() {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarksList));
  showDataTableList();
}

function resetForm() {
  siteNameInput.value = '';
  siteUrlInput.value = '';
  siteNameInput.classList.remove('is-valid');
  siteUrlInput.classList.remove('is-valid');
}

function toggleNoDataCaption() {
  if (bookmarksList.length) noDataEl.style.display = 'none';
  else noDataEl.style.display = 'table-caption';
}

function validateNameInput() {
  const errorFeedback = document.getElementsByClassName(
    'name-error-feedback'
  )[0];
  if (siteNameInput.value === '') {
    errorFeedback.innerHTML = 'This field is required.';
    siteNameInput.classList.add('is-invalid');
    siteNameInput.classList.remove('is-valid');
  } else if (siteNameInput.value.length < 3) {
    siteNameInput.classList.add('is-invalid');
    siteNameInput.classList.remove('is-valid');
    errorFeedback.innerHTML = 'Bookmark Name must be more than 3 characters.';
  } else {
    siteNameInput.classList.remove('is-invalid');
    siteNameInput.classList.add('is-valid');
  }
}

function validateURLInput() {
  const errorFeedback =
    document.getElementsByClassName('url-error-feedback')[0];
  const value = siteUrlInput.value.trim();
  if (value === '') {
    errorFeedback.innerHTML = 'This field is required.';
    siteUrlInput.classList.add('is-invalid');
    siteUrlInput.classList.remove('is-valid');
  } else if (!isValidURL(value)) {
    siteUrlInput.classList.add('is-invalid');
    siteUrlInput.classList.remove('is-valid');
    errorFeedback.innerHTML =
      'Please enter a valid URL (e.g., https://example.com).';
  } else {
    siteUrlInput.classList.remove('is-invalid');
    siteUrlInput.classList.add('is-valid');
  }
}

function isValidURL(URLText) {
  try {
    const url = new URL(URLText);
    url.protocol === 'http//' || url.protocol === 'https//';
    return true;
  } catch (_) {
    return false;
  }
}

function showSuccessAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Added Successfully!',
    text: 'Your item was saved.',
    timer: 1500,
    showConfirmButton: false,
    timerProgressBar: true,
  });
}
