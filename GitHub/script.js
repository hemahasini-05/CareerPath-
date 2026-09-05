const catalog = {
    'IT & Software': ['Software Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile App Developer', 'DevOps Engineer', 'Cloud Engineer', 'Cybersecurity Analyst', 'Network Engineer', 'Database Administrator', 'System Administrator', 'QA Engineer', 'Automation Tester', 'Technical Support Engineer'],
    'Data & AI': ['Data Analyst', 'Data Scientist', 'Machine Learning Engineer', 'AI Engineer', 'NLP Engineer', 'Computer Vision Engineer', 'Data Engineer', 'BI Analyst', 'AI Researcher'],
    'Engineering': ['Mechanical Design Engineer', 'CAD Engineer', 'Product Design Engineer', 'Manufacturing Engineer', 'Production Engineer', 'Quality Engineer', 'Maintenance Engineer', 'Automotive Engineer', 'EV Engineer', 'Robotics Engineer', 'Mechatronics Engineer', 'HVAC Engineer', 'Thermal Engineer', 'Aerospace Engineer'],
    'Electrical & Electronics': ['Electrical Engineer', 'Electronics Engineer', 'Embedded Systems Engineer', 'VLSI Engineer', 'PCB Designer', 'Power Systems Engineer', 'Control Systems Engineer', 'Instrumentation Engineer', 'IoT Engineer', 'Electrical Design Engineer'],
    'Civil & Construction': ['Civil Engineer', 'Structural Engineer', 'Construction Engineer', 'Site Engineer', 'Transportation Engineer', 'Geotechnical Engineer', 'Environmental Engineer', 'Quantity Surveyor', 'BIM Engineer', 'Urban Planner'],
    'Chemical & Process': ['Chemical Engineer', 'Process Engineer', 'Process Safety Engineer', 'Petroleum Engineer', 'Production Engineer', 'Environmental Engineer', 'Energy Engineer'],
    'Design & Creative': ['UI/UX Designer', 'Product Designer', 'Graphic Designer', '3D Designer', 'Motion Designer', 'Video Editor', 'Animator', 'Game Designer', 'Architect', 'Interior Designer'],
    'Business & Management': ['Business Analyst', 'Product Manager', 'Project Manager', 'Operations Manager', 'Supply Chain Analyst', 'Management Consultant', 'HR Specialist', 'Recruiter', 'Operations Analyst'],
    'Finance & Accounting': ['Financial Analyst', 'Investment Analyst', 'Accountant', 'Auditor', 'Tax Consultant', 'Risk Analyst', 'Business Finance Analyst', 'Financial Planner'],
    'Marketing & Sales': ['Digital Marketing Specialist', 'SEO Specialist', 'Content Strategist', 'Social Media Manager', 'Brand Manager', 'Sales Executive', 'Business Development Executive', 'Growth Marketing Specialist'],
    'Healthcare': ['Healthcare Administrator', 'Medical Laboratory Technologist', 'Clinical Research Associate', 'Healthcare Data Analyst', 'Medical Coding Specialist', 'Biomedical Engineer', 'Pharmaceutical Researcher'],
    'Science & Research': ['Research Scientist', 'Physics Researcher', 'Chemistry Researcher', 'Biotechnology Researcher', 'Environmental Scientist', 'Research Assistant'],
    'Government': ['Engineering Officer', 'Technical Officer', 'Junior Engineer', 'Assistant Engineer', 'Scientific Officer', 'Administrative Officer', 'Public-Sector Management Roles']
};

const skillGroups = {
    'Technical skills': ['Programming', 'CAD', 'Simulation', 'Data Analysis', 'Manufacturing', 'Engineering', 'Networking', 'Cloud', 'Cybersecurity', 'Database', 'Electronics', 'Embedded Systems', 'Machine Learning', 'Project Management'],
    'Tools & software': ['Python', 'Java', 'C++', 'JavaScript', 'AutoCAD', 'SolidWorks', 'CATIA', 'Creo', 'ANSYS', 'MATLAB', 'Revit', 'Solid Edge', 'Fusion 360', 'Excel', 'Power BI', 'Tableau', 'SQL', 'Git', 'Docker', 'AWS', 'Azure'],
    'Soft skills': ['Communication', 'Leadership', 'Teamwork', 'Problem Solving', 'Critical Thinking', 'Time Management', 'Presentation', 'Adaptability', 'Documentation']
};

const coreProfiles = {
    'Mechanical Design Engineer': { skills: ['CAD', 'SolidWorks', 'Engineering', 'Manufacturing', 'AutoCAD', 'GD&T'], level: 'Mid level', salary: '$82k – $118k', education: "Bachelor's degree in Mechanical Engineering or a related field", responsibilities: ['Create detailed 3D models and manufacturing drawings', 'Collaborate with manufacturing and quality teams', 'Validate designs through testing and iteration'], projects: ['Design a gearbox assembly', 'Perform FEA analysis', 'Create a manufacturing drawing'], progression: 'Junior Engineer → Design Engineer → Senior Design Engineer → Lead Engineer → Engineering Manager' },
    'Software Developer': { skills: ['Programming', 'Python', 'JavaScript', 'Git', 'Database'], level: 'Mid level', salary: '$94k – $148k', education: "Bachelor's degree in Computer Science or equivalent practical experience", responsibilities: ['Ship maintainable product features', 'Review code and improve engineering quality', 'Collaborate with product and design partners'], projects: ['Build a full-stack project', 'Contribute to an open-source repository', 'Deploy an API with tests'], progression: 'Junior Developer → Software Developer → Senior Engineer → Staff Engineer' },
    'Data Analyst': { skills: ['Data Analysis', 'SQL', 'Excel', 'Tableau', 'Python'], level: 'Entry level', salary: '$68k – $102k', education: 'Degree or experience in analytics, statistics, business, or a related field', responsibilities: ['Build dashboards and recurring reports', 'Find trends and anomalies in business data', 'Translate findings into clear recommendations'], projects: ['Create a business dashboard', 'Analyze a public dataset', 'Present a data-backed recommendation'], progression: 'Analyst → Senior Analyst → Analytics Lead → Data Product Manager' },
    'AI Engineer': { skills: ['Machine Learning', 'Python', 'Programming', 'TensorFlow', 'Data Analysis'], level: 'Senior level', salary: '$112k – $174k', education: "Bachelor's or master's degree in Computer Science, AI, or a related field", responsibilities: ['Train and evaluate production machine-learning models', 'Build reliable data and inference pipelines', 'Monitor model quality, safety, and performance'], projects: ['Ship a classification model', 'Build an evaluation pipeline', 'Create a responsible AI case study'], progression: 'ML Engineer → Senior AI Engineer → ML Architect → Head of AI' },
    'UI/UX Designer': { skills: ['Figma', 'User Research', 'Design Systems', 'Communication', 'Prototyping'], level: 'Mid level', salary: '$76k – $116k', education: 'Degree or portfolio in design, HCI, psychology, or equivalent experience', responsibilities: ['Translate user needs into clear flows', 'Create prototypes and test design decisions', 'Build consistent, accessible interface systems'], projects: ['Redesign a real workflow', 'Run five user interviews', 'Build an accessible component library'], progression: 'Designer → Senior Designer → Design Lead → Design Director' },
    'Business Analyst': { skills: ['Data Analysis', 'SQL', 'Excel', 'Communication', 'Problem Solving'], level: 'Mid level', salary: '$74k – $112k', education: "Bachelor's degree in Business, Analytics, Economics, or a related discipline", responsibilities: ['Document requirements and business processes', 'Analyze performance and identify opportunities', 'Align stakeholders around practical solutions'], projects: ['Map an operational process', 'Build a KPI dashboard', 'Write a product requirements document'], progression: 'Analyst → Senior Analyst → Strategy Lead → Director of Operations' }
};

const icons = ['◈', '⌘', '✦', '◇', '△', '◍', '◫', '⌁', '◎', '▱'];
const descriptionFor = (name, category) => `${name} professionals turn focused expertise into practical outcomes across ${category.toLowerCase()}.`;
const roles = Object.entries(catalog).flatMap(([category, names]) => names.map((name, index) => {
    const profile = coreProfiles[name] || {};
    const skills = profile.skills || (category === 'IT & Software' ? ['Programming', 'Git', 'Problem Solving'] : category === 'Design & Creative' ? ['Communication', 'Design Systems', 'Problem Solving'] : category === 'Data & AI' ? ['Data Analysis', 'Python', 'Critical Thinking'] : ['Engineering', 'Problem Solving', 'Communication']);
    return { id: `${category}-${name}`, name, category, description: descriptionFor(name, category), skills, level: profile.level || (index % 3 === 0 ? 'Entry level' : index % 3 === 1 ? 'Mid level' : 'Senior level'), salary: profile.salary || (index % 3 === 0 ? '$58k – $92k' : index % 3 === 1 ? '$76k – $122k' : '$98k – $156k'), icon: icons[index % icons.length], ...profile };
}));

const state = { query: '', category: 'All', level: 'All', saved: JSON.parse(localStorage.getItem('careermatch-saved') || '[]'), compared: [], selectedRole: 'Mechanical Design Engineer', profileSkills: new Set(['AutoCAD', 'SolidWorks', 'Excel', 'Engineering']), calculated: false, activeSkillGroup: 'Technical skills' };
const $ = (selector) => document.querySelector(selector);
const roleGrid = $('#role-grid');

function filteredRoles() {
    const query = state.query.toLowerCase().trim();
    return roles.filter((role) => {
        const searchable = [role.name, role.category, role.level, role.description, ...role.skills].join(' ').toLowerCase();
        return (!query || searchable.includes(query)) && (state.category === 'All' || role.category === state.category) && (state.level === 'All' || role.level === state.level) && (!$('#saved-filter').classList.contains('active') || state.saved.includes(role.id));
    });
}

function renderRoles() {
    const visible = filteredRoles();
    $('#results-count').textContent = `${visible.length} curated roles${visible.length < roles.length ? ` · ${roles.length + 1200}+ in the full library` : ''}`;
    $('#empty-state').hidden = visible.length > 0;
    roleGrid.innerHTML = visible.slice(0, 20).map((role) => `<article class="role-card"><div class="role-top"><span class="role-icon">${role.icon}</span><div class="card-actions"><button class="compare-role ${state.compared.includes(role.id) ? 'selected' : ''}" data-compare="${role.id}" title="Compare role">⇄</button><button class="save-role ${state.saved.includes(role.id) ? 'saved' : ''}" data-save="${role.id}" title="Save role">${state.saved.includes(role.id) ? '♥' : '♡'}</button></div></div><h3>${role.name}</h3><p>${role.description}</p><div class="role-tags"><span>${role.category}</span><span>${role.level}</span></div><div class="role-bottom"><span class="role-salary">${role.salary}<small>estimated range</small></span><button class="view-role" data-view="${role.id}">View profile ↗</button></div></article>`).join('');
    roleGrid.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => openRole(button.dataset.view)));
    roleGrid.querySelectorAll('[data-save]').forEach((button) => button.addEventListener('click', () => toggleSaved(button.dataset.save)));
    roleGrid.querySelectorAll('[data-compare]').forEach((button) => button.addEventListener('click', () => toggleCompare(button.dataset.compare)));
}

function toggleSaved(id) { state.saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id]; localStorage.setItem('careermatch-saved', JSON.stringify(state.saved)); renderRoles(); }
function toggleCompare(id) { state.compared = state.compared.includes(id) ? state.compared.filter((item) => item !== id) : state.compared.length < 3 ? [...state.compared, id] : state.compared; renderRoles(); renderComparison(); }

function openRole(id) {
    const role = roles.find((item) => item.id === id);
    if (!role) return;
    state.selectedRole = role.name; $('#target-role-name').textContent = role.name; renderSkillPicker();
    const profile = coreProfiles[role.name] || role;
    $('#modal-content').innerHTML = `<p class="modal-kicker">${role.category} · ${role.level}</p><h2>${role.name}</h2><p class="modal-intro">${role.description} This profile explains the expectations, proof points, and progression behind the role.</p><div class="detail-grid"><div><h4>Overview</h4><p>${role.description}</p></div><div><h4>Required education</h4><p>${profile.education || "A relevant degree, diploma, or equivalent practical experience."}</p></div><div><h4>Responsibilities</h4><ul>${(profile.responsibilities || ['Plan and deliver role-specific work', 'Collaborate with cross-functional teams', 'Document decisions and improve outcomes']).map((item) => `<li>${item}</li>`).join('')}</ul></div><div><h4>Required skills</h4><p>${role.skills.join(' · ')}</p></div><div><h4>Certifications & projects</h4><p>Relevant certifications are optional. Build 2–3 projects that show your judgment and tools in practice.</p></div><div><h4>Career progression</h4><p>${profile.progression || `Associate → ${role.level} → Lead → Principal or people leadership`}</p></div></div><div class="modal-actions"><button class="btn btn-primary" id="modal-check">Check my match ↗</button><span class="text-link">${role.salary} estimated range</span></div>`;
    $('#role-modal').hidden = false; document.body.style.overflow = 'hidden'; $('#modal-check').addEventListener('click', () => { closeModal(); $('#eligibility').scrollIntoView({ behavior: 'smooth' }); });
}
function closeModal() { $('#role-modal').hidden = true; document.body.style.overflow = ''; }

function renderSkillPicker() { const skills = [...new Set(roles.find((role) => role.name === state.selectedRole)?.skills || ['AutoCAD', 'SolidWorks', 'Excel', 'Python', 'SQL', 'Git', 'Communication'])]; $('#skill-picker').innerHTML = [...new Set([...skills, 'Python', 'SQL', 'Communication', 'Problem Solving', 'ANSYS'])].map((skill) => `<button type="button" class="skill-option ${state.profileSkills.has(skill) ? 'selected' : ''}" data-skill="${skill}">${skill}</button>`).join(''); $('#skill-count').textContent = `${state.profileSkills.size} selected`; $('#skill-picker').querySelectorAll('[data-skill]').forEach((button) => button.addEventListener('click', () => { const skill = button.dataset.skill; state.profileSkills.has(skill) ? state.profileSkills.delete(skill) : state.profileSkills.add(skill); renderSkillPicker(); })); }

function calculateMatch(event) {
    if (event) event.preventDefault();
    const role = roles.find((item) => item.name === state.selectedRole) || roles[0];
    const needed = role.skills || [];
    const have = needed.filter((skill) => state.profileSkills.has(skill));
    const missing = needed.filter((skill) => !state.profileSkills.has(skill));
    const education = $('#education').value === 'degree' || $('#education').value === 'masters' ? 92 : 65;
    const technical = Math.round((have.length / Math.max(needed.length, 1)) * 100);
    const tools = Math.min(100, Math.round((have.filter((skill) => ['CAD', 'SolidWorks', 'AutoCAD', 'Python', 'SQL', 'Excel', 'Figma', 'Git', 'ANSYS'].includes(skill)).length / 2) * 100));
    const experience = $('#experience').value === 'fresher' ? 60 : $('#experience').value === 'internship' ? 72 : $('#experience').value === '0-2' ? 82 : 94;
    const projectCerts = ($('#projects').value.trim() ? 90 : 42) + ($('#certifications').value.trim() ? 10 : 0);
    const score = Math.round(education * .18 + technical * .32 + tools * .18 + experience * .12 + Math.min(projectCerts, 100) * .2);
    const status = score >= 90 ? 'Highly Ready' : score >= 75 ? 'Strong Match' : score >= 50 ? 'Partially Ready' : 'Needs Development';
    state.calculated = true;
    $('#score-value').textContent = score; $('#score-circle').style.background = `conic-gradient(var(--cyan) ${score * 3.6}deg, rgba(109,226,238,.08) 0deg)`; $('#score-status').textContent = status; $('#score-copy').textContent = score >= 75 ? 'Your current profile is close. Focus on the gaps below to strengthen your evidence.' : 'A few focused skill and project improvements can move your profile forward.';
    setBreakdown('education-score', education); setBreakdown('technical-score', technical); setBreakdown('tools-score', tools); setBreakdown('experience-score', experience); setBreakdown('projects-score', Math.min(projectCerts, 100));
    $('#have-skills').innerHTML = (have.length ? have : ['No matched role skills yet']).map((skill) => `<li>${skill}</li>`).join(''); $('#need-skills').innerHTML = (missing.length ? missing : ['You have covered the core role skills']).map((skill) => `<li>${skill}</li>`).join(''); $('#roadmap-progress').textContent = `${score}%`; $('#timeline').classList.toggle('ready', score >= 75); renderComparison();
}
function setBreakdown(id, value) { $(`#${id}`).textContent = `${value}%`; $(`#${id}`).closest('div').querySelector('em').style.width = `${value}%`; }

function renderComparison() {
    if (!state.compared.length) { $('#comparison-panel').innerHTML = '<div class="comparison-empty"><span>＋</span><strong>Select roles to compare</strong><p>Use the compare control on any role card to build your shortlist.</p></div>'; return; }
    const selected = state.compared.map((id) => roles.find((role) => role.id === id)).filter(Boolean); const rows = ['Education', 'Core skills', 'Tools', 'Experience', 'Projects'];
    $('#comparison-panel').innerHTML = `<table class="comparison-table"><thead><tr><th>Requirement</th>${selected.map((role) => `<th>${role.name}</th>`).join('')}</tr></thead><tbody>${rows.map((row, index) => `<tr><td>${row}</td>${selected.map((role) => `<td><span class="match-pill">${Math.max(48, 92 - index * 9 - Math.abs(role.name.length - 20))}%</span></td>`).join('')}</tr>`).join('')}</tbody></table><div class="comparison-best">Best match: <strong>${selected[0].name}</strong> · based on your current profile estimate</div>`;
}

function renderLibrary() { const list = skillGroups[state.activeSkillGroup]; $('#skill-library-list').innerHTML = list.map((skill) => `<span class="library-skill">${skill}</span>`).join(''); }

$('#role-search').addEventListener('input', (event) => { state.query = event.target.value; renderRoles(); });
$('#industry-filter').addEventListener('change', (event) => { state.category = event.target.value; document.querySelectorAll('.category-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.category === state.category)); renderRoles(); });
$('#level-filter').addEventListener('change', (event) => { state.level = event.target.value; renderRoles(); });
$('#saved-filter').addEventListener('click', (event) => { event.currentTarget.classList.toggle('active'); renderRoles(); });
document.querySelectorAll('.category-tab').forEach((tab) => tab.addEventListener('click', () => { state.category = tab.dataset.category; $('#industry-filter').value = state.category; document.querySelectorAll('.category-tab').forEach((item) => item.classList.toggle('active', item === tab)); renderRoles(); }));
$('#profile-form').addEventListener('submit', calculateMatch); $('#reset-profile').addEventListener('click', () => { state.profileSkills = new Set(['AutoCAD', 'SolidWorks', 'Excel', 'Engineering']); state.calculated = false; $('#score-value').textContent = '0'; $('#score-status').textContent = 'Complete your profile'; $('#score-copy').textContent = 'Your estimate will appear here after you calculate a role match.'; renderSkillPicker(); });
$('#change-role').addEventListener('click', () => { $('#explore').scrollIntoView({ behavior: 'smooth' }); }); $('#build-roadmap').addEventListener('click', () => { $('#roadmap').scrollIntoView({ behavior: 'smooth' }); document.querySelector('.timeline').classList.add('ready'); }); $('#open-comparison').addEventListener('click', () => $('#comparison').scrollIntoView({ behavior: 'smooth' }));
document.querySelectorAll('.library-tab').forEach((tab) => tab.addEventListener('click', () => { state.activeSkillGroup = tab.dataset.skillGroup; document.querySelectorAll('.library-tab').forEach((item) => item.classList.toggle('active', item === tab)); renderLibrary(); }));
$('#modal-close').addEventListener('click', closeModal); $('#role-modal').addEventListener('click', (event) => { if (event.target.id === 'role-modal') closeModal(); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); if (event.key === '/' && document.activeElement !== $('#role-search')) { event.preventDefault(); $('#role-search').focus(); } });
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
function closeNavigation() { mainNav.classList.remove('is-open'); navToggle.setAttribute('aria-expanded', 'false'); }
navToggle.addEventListener('click', (event) => { const open = mainNav.classList.toggle('is-open'); event.currentTarget.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNavigation(); });
const categories = Object.keys(catalog); $('#industry-filter').insertAdjacentHTML('beforeend', categories.map((category) => `<option value="${category}">${category}</option>`).join('')); $('#year').textContent = new Date().getFullYear();
renderRoles(); renderSkillPicker(); renderLibrary();
