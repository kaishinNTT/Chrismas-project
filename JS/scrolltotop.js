// function scrollToTop() {
//     window.scrollTo(0, 0);
// }

function scrollToTop() {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    var scrollTopButton = document.querySelector('.scrollTop');
    
    // Kiểm tra vị trí cuộn, nếu lớn hơn 20px thì thêm lớp 'show', ngược lại xóa lớp 'show'
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
};
