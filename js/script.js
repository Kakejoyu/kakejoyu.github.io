$(function () {
  const themeChange = () => {
    $('a').css('transition', 'none');
    $('#theme-toggle i').toggleClass('fa-moon').toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
    setTimeout(() => {
      $('a').css('transition', 'color 0.3s linear');
    }, 10);
  };

  if (localStorage.getItem('theme') == 'dark') themeChange();

  let themeTimer;
  $('#theme-toggle').on('click', function () {
    if (themeTimer) {
      clearTimeout(themeTimer);
    }
    themeTimer = setTimeout(() => {
      themeChange();
      if ($('body').hasClass('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }, 100);
  });

  switch (location.pathname.split('/')[1]) {
    case 'en':
      $('#lang-toggle').val('en');
      break;
  }

  $('#lang-toggle').on('change', function () {
    switch (location.pathname.split('/')[1]) {
      case 'en':
        switch ($('#lang-toggle').val()) {
          case 'ja':
            location.href =
              '/' + location.pathname.split('/').slice(2).join('/');
            break;
          default:
            location.href =
              '/' +
              $('#lang-toggle').val() +
              '/' +
              location.pathname.split('/').slice(2).join('/');
            break;
        }
        break;
      default:
        location.href =
          '/' +
          $('#lang-toggle').val() +
          '/' +
          location.pathname.split('/').slice(1).join('/');
        break;
    }
  });

  $('#turn-card').on('click', function () {
    $('.profile-card').toggleClass('turned');
    $('.stack-card').toggleClass('turned');
  });

  $('#open-project').on('click', function () {
    $('body').toggleClass('card-opened');
    $('#open-project i')
      .toggleClass('fa-circle-chevron-left')
      .toggleClass('fa-circle-chevron-right');
  });

  tippy('[data-tippy-content]');

  $('#mcid-link').on('click', function () {
    navigator.clipboard.writeText('Kakejoyu');
    if (location.pathname.split('/')[1] == 'en') {
      alert('Copied to clipboard.');
    } else {
      alert('クリップボードにコピーしました。');
    }
  });

  $('#xbox-link').on('click', function () {
    navigator.clipboard.writeText('Kakejoyu');
    if (location.pathname.split('/')[1] == 'en') {
      alert('Copied to clipboard.');
    } else {
      alert('クリップボードにコピーしました。');
    }
  });
});
