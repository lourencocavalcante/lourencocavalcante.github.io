(function () {
  const KEY = "aso-aulas-concluidas-v1";

  function load() {
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); }
    catch (_) { return new Set(); }
  }

  function save(items) {
    localStorage.setItem(KEY, JSON.stringify(Array.from(items)));
  }

  function lessonLinks() {
    const links = Array.from(document.querySelectorAll('.md-nav__link[href]'));
    return Array.from(new Set(links.map(a => new URL(a.href, location.href).pathname)
      .filter(path => /\/unidade-[1-4]\/\d{2}-/.test(path))));
  }

  function mountProgress(done) {
    let shell = document.querySelector('.course-progress-shell');
    if (!shell) {
      shell = document.createElement('div');
      shell.className = 'course-progress-shell';
      shell.innerHTML = '<div class="course-progress-bar"></div>';
      const main = document.querySelector('.md-main');
      if (main) main.prepend(shell);
    }
    const links = lessonLinks();
    const completed = links.filter(path => done.has(path)).length;
    const percent = links.length ? Math.round((completed / links.length) * 100) : 0;
    shell.querySelector('.course-progress-bar').style.width = percent + '%';
    shell.title = `${completed} de ${links.length} aulas concluídas`;
  }

  function mountButton(done) {
    const path = location.pathname;
    if (!/\/unidade-[1-4]\/\d{2}-/.test(path)) return;
    const article = document.querySelector('article.md-content__inner');
    if (!article || article.querySelector('.lesson-complete')) return;

    const box = document.createElement('div');
    box.className = 'lesson-complete';
    box.innerHTML = '<div><strong>Progresso da aula</strong><small>O registro fica somente neste navegador.</small></div><button type="button"></button>';
    const button = box.querySelector('button');

    const render = () => {
      const checked = done.has(path);
      button.textContent = checked ? '✓ Aula concluída' : 'Marcar como concluída';
      button.classList.toggle('is-done', checked);
    };

    button.addEventListener('click', () => {
      if (done.has(path)) done.delete(path); else done.add(path);
      save(done);
      render();
      mountProgress(done);
    });

    render();
    article.appendChild(box);
  }

  function init() {
    const done = load();
    mountProgress(done);
    mountButton(done);
  }

  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else document.addEventListener('DOMContentLoaded', init);
})();
