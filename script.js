// البيانات المبدئية التي تريد إضافتها إلى localStorage
const initialData = [
  { الرقم: 1, اسم_الموظف: "نهى نايف حسن الزهراني", المسمى_الوظيفي: "موظف اداري", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "5-8-2024", رقم_المهمة: 74, اسم_المهمة: "كيفية دمج مجموعة صور ببرنامج الرسام Paint", مرفق_المهمة: "ملف", رابط_المرفق: "https://drive.google.com/file/d/129nsHQHpicMV0D2GVzOKbsPznoPWP0Sz/view?usp=drive_link", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 2, اسم_الموظف: "", المسمى_الوظيفي: "", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "12-8-2024", رقم_المهمة: 75, اسم_المهمة: "كيفية تحريك صورة ودمجها مع صورة أخرى", مرفق_المهمة: "ملف", رابط_المرفق: "https://drive.google.com/file/d/1HcQqRw8ERptvaAjRGmTxjflP1VXCGlec/view?usp=drive_link", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 3, اسم_الموظف: "", المسمى_الوظيفي: "", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "19-8-2024", رقم_المهمة: 76, اسم_المهمة: "كيفية حفظ الصورة بصيغة آخرى", مرفق_المهمة: "ملف", رابط_المرفق: "https://drive.google.com/file/d/1Og1gtXx83W1bsKjtfJLQZODDeADl7Qb8/view?usp=drive_link", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 4, اسم_الموظف: "", المسمى_الوظيفي: "", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "26-8-2024", رقم_المهمة: 77, اسم_المهمة: "إغلاق أى نافذة سريعاً بإستخدام لوحة المفاتيح", مرفق_المهمة: "فيديو", رابط_المرفق: "https://www.youtube.com/watch?v=FviXU4oza3U", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 5, اسم_الموظف: "نورة عبد العزيز محمد الزهراني", المسمى_الوظيفي: "موظف", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "5-8-2024", رقم_المهمة: 74, اسم_المهمة: "كيفية دمج مجموعة صور ببرنامج الرسام Paint", مرفق_المهمة: "ملف", رابط_المرفق: "https://drive.google.com/file/d/129nsHQHpicMV0D2GVzOKbsPznoPWP0Sz/view?usp=drive_link", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 6, اسم_الموظف: "", المسمى_الوظيفي: "", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "12-8-2024", رقم_المهمة: 75, اسم_المهمة: "كيفية تحريك صورة ودمجها مع صورة أخرى", مرفق_المهمة: "ملف", رابط_المرفق: "https://drive.google.com/file/d/1HcQqRw8ERptvaAjRGmTxjflP1VXCGlec/view?usp=drive_link", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 7, اسم_الموظف: "", المسمى_الوظيفي: "", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "19-8-2024", رقم_المهمة: 76, اسم_المهمة: "كيفية حفظ الصورة بصيغة آخرى", مرفق_المهمة: "ملف", رابط_المرفق: "https://drive.google.com/file/d/1Og1gtXx83W1bsKjtfJLQZODDeADl7Qb8/view?usp=drive_link", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 8, اسم_الموظف: "", المسمى_الوظيفي: "", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "26-8-2024", رقم_المهمة: 77, اسم_المهمة: "إغلاق أى نافذة سريعاً بإستخدام لوحة المفاتيح", مرفق_المهمة: "فيديو", رابط_المرفق: "https://www.youtube.com/watch?v=FviXU4oza3U", اسناد_المهمة: true, ملاحظات_الاسناد: "" },
  { الرقم: 9, اسم_الموظف: "نوال معيض حسن الزهراني", المسمى_الوظيفي: "موظف", مرحلة_التدريب: "مهارات عملية", تاريخ_المهمة: "5-8-2024", رقم_المهمة: 74, اسم_المهمة: "كيفية دمج مجموعة صور ببرنامج الرسام Paint", مرفق_المهمة: "ملف", رابط_المرفق: "https://drive.google.com/file/d/129nsHQHpicMV0D2GVzOKbsPznoPWP0Sz/view?usp=drive_link", اسناد_المهمة: true, ملاحظات_الاسناد: "" }
];

// استرجاع البيانات المحفوظة من localStorage أو استخدام البيانات المبدئية
const tasksData = JSON.parse(localStorage.getItem('tasksData')) || initialData;

// دالة لإضافة البيانات إلى الجدول
function loadTableData() {
  const tableBody = document.getElementById("taskTableBody");
  tableBody.innerHTML = ''; // إفراغ الجدول لتجنب التكرار

  tasksData.forEach(task => {
    const row = document.createElement("tr");

    Object.keys(task).forEach(key => {
      const cell = document.createElement("td");
      if (key === 'اسناد_المهمة') {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task[key];
        checkbox.disabled = true; // لجعل خانة الاختيار غير قابلة للتعديل
        cell.appendChild(checkbox);
      } else if (key === 'رابط_المرفق') {
        const link = document.createElement("a");
        link.href = task[key];
        link.textContent = "رابط";
        link.target = "_blank";
        cell.appendChild(link);
      } else {
        cell.textContent = task[key];
      }
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

// دالة لإضافة صف جديد إلى الجدول باستخدام البيانات المدخلة من النموذج
function addRow() {
  const newRowData = {
    "رقم": document.getElementById("رقم").value,
    "اسم_الموظف": document.getElementById("اسم_الموظف").value,
    "المسمى_الوظيفي": document.getElementById("المسمى_الوظيفي").value,
    "مرحلة_التدريب": document.getElementById("مرحلة_التدريب").value,
    "تاريخ_المهمة": document.getElementById("تاريخ_المهمة").value,
    "رقم_المهمة": document.getElementById("رقم_المهمة").value,
    "اسم_المهمة": document.getElementById("اسم_المهمة").value,
    "مرفق_المهمة": document.getElementById("مرفق_المهمة").value,
    "رابط_المرفق": document.getElementById("رابط_المرفق").value,
    "اسناد_المهمة": document.getElementById("اسناد_المهمة").checked,
    "ملاحظات_الاسناد": ""
  };

  tasksData.push(newRowData);

  // حفظ البيانات في localStorage
  localStorage.setItem('tasksData', JSON.stringify(tasksData));

  loadTableData();

  // إعادة تعيين النموذج بعد إضافة الصف
  document.getElementById("taskForm").reset();
}

// تحميل البيانات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadTableData);
function addRow(tableId) {
  const formId = tableId === 'internalTaskTable' ? 'internalTaskForm' : 'clientTaskForm';
  const form = document.getElementById(formId);
  const newRowData = Array.from(form.elements).reduce((data, element) => {
    if (element.tagName === 'INPUT') {
      data[element.id] = element.type === 'checkbox' ? element.checked : element.value;
    }
    return data;
  }, {});

  const tableBody = document.getElementById(tableId + 'Body');
  const row = document.createElement("tr");

  Object.keys(newRowData).forEach(key => {
    const cell = document.createElement("td");
    cell.textContent = newRowData[key];
    row.appendChild(cell);
  });

  tableBody.appendChild(row);
  form.reset();
}
const internalTasksData = JSON.parse(localStorage.getItem('internalTasksData')) || [];
const clientTasksData = JSON.parse(localStorage.getItem('clientTasksData')) || [];

// Function to load table data from localStorage
function loadTableData(tableId, data) {
  const tableBody = document.getElementById(tableId + 'Body');
  tableBody.innerHTML = ''; // Clear the table to avoid duplication

  data.forEach(task => {
    const row = document.createElement("tr");

    Object.keys(task).forEach(key => {
      const cell = document.createElement("td");
      if (key.includes('رابط')) {
        const link = document.createElement("a");
        link.href = task[key];
        link.textContent = "رابط";
        link.target = "_blank";
        cell.appendChild(link);
      } else if (typeof task[key] === 'boolean') {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task[key];
        checkbox.disabled = true; // Make the checkbox read-only
        cell.appendChild(checkbox);
      } else {
        cell.textContent = task[key];
      }
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

// Function to add a new row to the specified table and save data to localStorage
function addRow(tableId) {
  const formId = tableId === 'internalTaskTable' ? 'internalTaskForm' : 'clientTaskForm';
  const storageKey = tableId === 'internalTaskTable' ? 'internalTasksData' : 'clientTasksData';
  const dataArray = tableId === 'internalTaskTable' ? internalTasksData : clientTasksData;

  const form = document.getElementById(formId);
  const newRowData = Array.from(form.elements).reduce((data, element) => {
    if (element.tagName === 'INPUT') {
      data[element.id] = element.type === 'checkbox' ? element.checked : element.value;
    }
    return data;
  }, {});

  dataArray.push(newRowData);

  // Save updated data to localStorage
  localStorage.setItem(storageKey, JSON.stringify(dataArray));

  loadTableData(tableId, dataArray);
  form.reset();
}

// Load data from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
  loadTableData('internalTaskTable', internalTasksData);
  loadTableData('clientTaskTable', clientTasksData);

  // Open the first tab by default
  document.getElementsByClassName("tablinks")[0].click();
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function filterByMonth() {
  const selectedMonth = document.getElementById("monthFilter").value;
  const filteredData = clientTasksData.filter(task => {
    if (task.تاريخ_المهمة_عميل) {
      const taskDate = new Date(task.تاريخ_المهمة_عميل);
      const taskMonth = ("0" + (taskDate.getMonth() + 1)).slice(-2); // Extract month in two digits
      return taskMonth === selectedMonth;
    }
    return false;
  });

  loadTableData('clientTaskTable', filteredData);
}

// Load data from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
  loadTableData('internalTaskTable', internalTasksData);
  loadTableData('clientTaskTable', clientTasksData);

  // Open the first tab by default
  document.getElementsByClassName("tablinks")[0].click();
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 
// Function to export table data to CSV
function exportTableToCSV(tableId, filename) {
  const table = document.getElementById(tableId);
  const rows = table.querySelectorAll('tr');
  let csvContent = "\uFEFF"; // Adding BOM for UTF-8 encoding

  // Iterate over each row in the table
  rows.forEach((row) => {
      const cells = row.querySelectorAll('th, td');
      const rowData = [];

      // Iterate over each cell in the row
      cells.forEach((cell) => {
          let cellContent = cell.innerText.replace(/"/g, '""'); // Escape double quotes
          rowData.push(`"${cellContent}"`); // Wrap cell content in quotes
      });

      csvContent += rowData.join(",") + "\n"; // Join cells with commas and add a newline
  });

  // Create a blob from the CSV content and trigger a download
  const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const csvUrl = URL.createObjectURL(csvBlob);
  const link = document.createElement("a");
  link.href = csvUrl;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

