// load phone function
let loadPhone = async (searchText = '13', isShowAll) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    let data = await res.json();
    let phones = data.data;
    disPlayPhones(phones, isShowAll);
}

// dislplayPhones function
let disPlayPhones = (phones, isShowAll) => {
    let showAllContainer = document.getElementById("show-all-container");
    if (phones.length > 8 && !isShowAll) {
        showAllContainer.classList.remove("hidden");
    } else {
        showAllContainer.classList.add("hidden");
    }

    // display only fast 8 phones
    if (!isShowAll) {
        phones = phones.slice(0, 8);
    }

    let phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = "";

    phones.forEach(phone => {
        let phoneCard = document.createElement("div");
        phoneCard.classList = `card w-80 xl:w-96 bg-red-100 shadow-xl p-4 mx-auto rounded-lg`
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center my-10">
                <button onclick="handleShowDetails('${phone.slug}');" class="btn btn-accent text-white">Show Details</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner 
    loadingSpinner(false);
}

// handleShowDetails function
let handleShowDetails = async (id) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    let data = await res.json();
    let phone = data.data;
    showPhoneDetails(phone);
}

let showPhoneDetails = (phone) => {
    let phnoneName = document.getElementById("show-details-phone-name");
    phnoneName.innerText = phone.name;
    let showDetailsContainer = document.getElementById("show-deails-container");
    showDetailsContainer.innerHTML = `
    <img class='mt-6 mb-6' src="${phone.image}" />
    <p><span">${phone?.mainFeatures?.storage}</span></p>
    <p><span">${phone?.mainFeatures?.displaySize ? phone.mainFeatures.displaySize : 'No Data Available'}</span></p>
    `
    // display the modal
    show_details_modal.showModal();
}

// handle search button 
let handleSearch = (isShowAll) => {
    loadingSpinner(true);
    let searchField = document.getElementById("search-field");
    let searchText = searchField.value;
    loadPhone(searchText, isShowAll);
}

let loadingSpinner = (isLoading) => {
    let loadingSpinner = document.getElementById("spinner");
    if (isLoading) {
        loadingSpinner.classList.remove("hidden");
    } else {
        loadingSpinner.classList.add("hidden");
    }
}

// handle show all function
let handleShowAll = () => {
    handleSearch(true);
}

// for default data
loadPhone();





