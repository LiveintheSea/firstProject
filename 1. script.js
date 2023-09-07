function showProjectDetails(projectNumber) {
    const projectDescription = document.getElementById('project-description');
    
    if (projectNumber === 1) {
        projectDescription.textContent = "프로젝트 1은 웹 디자인 및 개발에 대한 나의 열정을 보여주는 것입니다. 이 프로젝트는 뛰어난 사용자 경험을 제공합니다.";
    } else if (projectNumber === 2) {
        projectDescription.textContent = "프로젝트 2는 더 많은 기술적인 능력을 향상시키는 데 도움이 되었습니다. 이 프로젝트는 웹 애플리케이션 개발의 복잡성을 이해하는 데 도움이 되었습니다.";
    }
    
    const projectDetails = document.getElementById('project-details');
    projectDetails.style.display = 'block';
}

function closeProjectDetails() {
    const projectDetails = document.getElementById('project-details');
    projectDetails.style.display = 'none';
}