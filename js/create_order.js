window.onload = function() {
    var forms = document.querySelectorAll('form'); // Lấy tất cả các form
  
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form
        var inputField = form.querySelector('input[type="text"]');
        var input = inputField.value; // Lấy giá trị từ input
        var key = inputField.name; // Lấy tên của trường nhập liệu để sử dụng làm khóa cho localStorage
        localStorage.setItem(key, input); // Lưu giá trị input vào localStorage
      });
    });
  };

 
  window.onload = function() {
    var dropdowns = document.querySelectorAll('.dropdown'); // Lấy tất cả các dropdown
  
    dropdowns.forEach(function(dropdown) {
      var button = dropdown.querySelector('.dropbtn');
      var links = dropdown.querySelectorAll('.dropdown-content a');
      var dropdownContent = dropdown.querySelector('.dropdown-content');
  
      links.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault(); // Ngăn chặn hành vi mặc định của link
          var value = this.textContent; // Lấy nội dung của link
          button.textContent = value; // Cập nhật nội dung của nút
          localStorage.setItem(button.id, value); // Lưu giá trị vào localStorage
          dropdownContent.style.display = 'none'; // Ẩn menu dropdown
        });
      });
  
      button.addEventListener('click', function() {
        dropdownContent.style.display = 'block'; // Hiển thị menu dropdown khi click vào nút
      });
    });
  
    var cityDropdown = document.getElementById('cityDropdown');
    var districtDropdown = document.getElementById('districtDropdown');
  
    var districts = {
      'Hà Nội': ['Quận Ba Đình', 'Quận Hoàn Kiếm', 'Quận Hai Bà Trưng', /* Thêm các quận khác tại đây */],
      'TP Hồ Chí Minh': ['Quận 1', 'Quận 2', 'Quận 3', /* Thêm các quận khác tại đây */],
      // Thêm các tỉnh thành khác tại đây
    };
  
    cityDropdown.addEventListener('change', function() {
      var selectedCity = this.value;
      var relatedDistricts = districts[selectedCity];
  
      // Xóa các lựa chọn hiện tại trong menu "Chọn Quận huyện"
      districtDropdown.innerHTML = '';
  
      // Thêm các lựa chọn mới vào menu "Chọn Quận huyện"
      relatedDistricts.forEach(function(district) {
        var option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtDropdown.appendChild(option);
      });
    });
  };
  
  