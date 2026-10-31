function renderTenses(data) {
  // 1. Render nhóm Simple Tenses
  const simpleContainer = document.getElementById("simple-tenses-list");
  if (simpleContainer) {
    simpleContainer.innerHTML = data.simple.map(item => `
      <div class="LearningCard" id="${item.id}">
          <img src="${item.img}" alt="">
          <h4>${item.title}</h4>
          <div>
              <button onclick="window.location.href = '${item.link}'">Start Lesson</button>
          </div>
      </div>
    `).join("");
  }

  // 2. Render nhóm Advanced Tenses
  const advancedContainer = document.getElementById("advanced-tenses-list");
  if (advancedContainer) {
    advancedContainer.innerHTML = data.advanced.map(item => `
      <div class="LearningCard" id="${item.id}">
          <img src="${item.img}" alt="">
          <h4>${item.title}</h4>
          <div>
              <button onclick="window.location.href = '${item.link}'">Start Lesson</button>
          </div>
      </div>
    `).join("");
  }
}

// Chạy hàm render khi trang đã tải xong
document.addEventListener("DOMContentLoaded", () => {
  renderTenses(tensesData);
});