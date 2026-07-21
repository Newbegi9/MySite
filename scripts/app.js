/* ==========================================================================
   PORTFOLIO APPLICATION ENGINE
   Handles SPA Section Navigation, Work Filtering, Modal Controller, & Form Submissions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initWorkFilter();
  renderWorkGrid('all');
  initModal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. NAVIGATION & HASH ROUTER
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pageSections = document.querySelectorAll('.page-section');

  function activateSection(targetId) {
    // Default to 'home' if invalid or empty
    const validSections = ['home', 'work', 'craft', 'coaching', 'about'];
    const activeId = validSections.includes(targetId) ? targetId : 'home';

    pageSections.forEach(section => {
      if (section.id === activeId) {
        section.removeAttribute('hidden');
      } else {
        section.setAttribute('hidden', 'true');
      }
    });

    navLinks.forEach(link => {
      const linkTarget = link.getAttribute('data-target');
      if (linkTarget === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle nav button clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      window.location.hash = target;
      activateSection(target);
    });
  });

  // Handle hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    activateSection(hash);
  });

  // Initial load
  const initialHash = window.location.hash.replace('#', '') || 'home';
  activateSection(initialHash);
}

/* --------------------------------------------------------------------------
   2. WORK SECTION FILTERING & GRID RENDERER
   -------------------------------------------------------------------------- */
function initWorkFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      renderWorkGrid(filter);
    });
  });
}

function renderWorkGrid(filter) {
  const gridContainer = document.getElementById('work-grid-container');
  if (!gridContainer) return;

  const items = PORTFOLIO_DATA.work.filter(item => filter === 'all' || item.type === filter);

  gridContainer.innerHTML = items.map(item => `
    <article class="card" onclick="openProjectModal('${item.id}')">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="card-badge ${item.accent}">${item.tag}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-summary">${item.subtitle}</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">${item.problem}</p>
        <div class="card-footer">
          <span>${item.techStack ? item.techStack[0] : ''}</span>
          <span class="card-footer-link">Read Case Study &rarr;</span>
        </div>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   3. MODAL CONTROLLER (PROJECT DEEP DIVE)
   -------------------------------------------------------------------------- */
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) {
      closeModal();
    }
  });
}

window.openProjectModal = function(projectId) {
  const item = PORTFOLIO_DATA.work.find(w => w.id === projectId) || 
               PORTFOLIO_DATA.featured.find(f => f.id === projectId);
  
  if (!item) return;

  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content-body');

  content.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="modal-header-img" />
    <span class="card-badge ${item.accent || 'indigo'}" style="position: static; display: inline-block; margin-bottom: 1rem;">${item.tag || item.categoryLabel}</span>
    <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; line-height: 1.2;">${item.title}</h2>
    <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">${item.subtitle || item.summary}</p>
    
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--accent-ai); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">The Challenge / Problem</h4>
        <p style="color: var(--text-primary); line-height: 1.6;">${item.problem || item.summary}</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--accent-shopify); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Methodology & Execution</h4>
        <p style="color: var(--text-primary); line-height: 1.6;">${item.methodology || item.summary}</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--accent-craft); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Measurable Outcomes & Metrics</h4>
        <p style="color: var(--text-primary); font-size: 1.15rem; font-weight: 700;">${item.outcomes || item.metrics}</p>
      </div>

      ${item.techStack ? `
        <div>
          <h4 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.75rem;">Technologies & Tools</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${item.techStack.map(tech => `<span style="padding: 0.35rem 0.85rem; background: rgba(255,255,255,0.06); border-radius: 9999px; font-size: 0.85rem; font-weight: 500;">${tech}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.setAttribute('hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   4. CONTACT FORM & INTERACTIVE ACTIONS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    showToast(`Thank you ${name}! Your message has been sent successfully.`);
    form.reset();
  });
}

window.copyEmail = function() {
  const email = "contact@multidisciplinary-portfolio.design";
  navigator.clipboard.writeText(email).then(() => {
    showToast("Email address copied to clipboard!");
  }).catch(() => {
    showToast("Email address: contact@multidisciplinary-portfolio.design");
  });
};

function showToast(message) {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <span>✓</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
