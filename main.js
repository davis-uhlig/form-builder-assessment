var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

for (var i = 0; i < formData.length; i++) {
  let form = document.querySelector("form")
  let obj = formData[i];
  let text;
  if (obj.options.length === 0) {
    text = '<input class="look-pretty" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
  } else {
    text = '<select name="select language" class="look-pretty" options="' + obj.options[i].label +'" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'"></select>'
  }
  form.insertAdjacentHTML("beforeend", text);
}

let language = document.querySelector("#user-language");
language.insertAdjacentHTML('beforeend', '<select name ="select language"><option value="" disable selected hidden>Select language...</option><option>English</option><option>French</option><option>Spanish</option><option>Chinese</option><option>Japanese</option></select>');
