document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    initCollages();
    initAchievementsHover();
    initPanelToggle();
    initMapArtsViewer();
});

const esc = str => String(str).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const setHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
};

function renderAll() {
    setHtml('videoChannelList', SITE_DATA.videoChannels.map(previewItem).join('') + triggerItem());
    setHtml('expandedVideoGrid', SITE_DATA.shortFormVideos.map(shortFormItem).join(''));
    setHtml('biblesList', SITE_DATA.bibles.map(previewItem).join(''));
    setHtml('extrasList', SITE_DATA.extras.map(previewItem).join(''));
    setHtml('achievementsFeatured', SITE_DATA.achievementsFeatured.map(achievementCard).join(''));
    setHtml('achievementsGrid', SITE_DATA.achievementsRest.map(achievementCard).join(''));
    setHtml('mapArtsGallery', SITE_DATA.mapArts.map(mapArtItem).join(''));
    setHtml('socialsList', SITE_DATA.socials.map(socialItem).join(''));
    setHtml('footerCopy', SITE_DATA.footerCopy);
}

function previewItem(item) {
    return `
        <a href="${esc(item.href)}" class="item-link" target="_blank" rel="noopener">
            <div class="preview-item">
                <img class="thumb" src="${esc(item.thumb)}" alt="${esc(item.name)}" />
                <div class="info">
                    <div class="info-row">
                        <span class="name">${esc(item.name)}</span>
                        ${item.amount ? `<span class="separator">|</span><span class="amount">${esc(item.amount)}</span>` : ''}
                    </div>
                    <span class="date">${esc(item.date)}</span>
                </div>
            </div>
        </a>`;
}

function triggerItem() {
    const t = SITE_DATA.shortFormTrigger;
    return `
        <a href="#" class="item-link" id="shortFormTrigger">
            <div class="preview-item">
                <div class="info">
                    <div class="info-row"><span class="name">${esc(t.name)}</span></div>
                    <span class="date">${esc(t.date)}</span>
                </div>
            </div>
        </a>`;
}

function shortFormItem(v) {
    return `
        <a href="${esc(v.href)}" target="_blank" rel="noopener" class="expanded-video-item">
            <div class="video-thumb-wrapper">
                <img loading="lazy" class="video-thumbnail" data-src="${esc(v.thumbnail)}" alt="${esc(v.title)}" />
            </div>
            <div class="video-info">
                <div class="video-title">${esc(v.title)}</div>
                <div class="video-date">${esc(v.date)}</div>
            </div>
        </a>`;
}

function achievementCard(a) {
    return `
        <div class="achievement-card" data-bg-img="${esc(a.bgImg)}">
            ${a.year ? `<span class="ach-year">${esc(a.year)}</span>` : ''}
            <h3 class="ach-title">${esc(a.title)}</h3>
            <p class="ach-desc">${esc(a.desc)}</p>
        </div>`;
}

function mapArtItem(m, i) {
    return `
        <a href="#" class="mapart-item" data-index="${i}">
            <img loading="lazy" src="${esc(m.thumb)}" alt="${esc(m.alt)}" />
        </a>`;
}

function socialItem(s) {
    return `
        <a href="${esc(s.href)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">
            <i class="${esc(s.icon)}"></i>
        </a>`;
}

function initCollages() {
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    const sets = [
        ['.bg-collage-img', 'images/', ['collage1.png', 'collage2.png', 'collage3.png', 'collage4.png', 'collage5.png', 'collage6.png', 'collage7.png', 'collage8.png', 'collage9.png', 'collage10.png']],
        ['.bg-excels-img', 'images/excels/', ['excel1.png', 'excel2.png', 'excel3.png', 'excel4.png', 'excel5.png', 'excel6.png']],
        ['.bg-extra-img', 'images/extra/', ['extra1.gif', 'extra2.gif', 'extra3.png', 'extra4.png', 'extra5.gif', 'extra6.gif', 'extra7.gif', 'extra8.png', 'extra9.png', 'extra10.gif', 'extra11.gif', 'extra12.png', 'extra13.png', 'extra14.gif', 'extra15.png', 'extra16.png', 'extra17.gif', 'extra18.gif', 'extra19.png', 'extra20.gif', 'extra21.gif', 'extra22.gif', 'extra23.png', 'extra24.gif', 'extra25.png', 'extra26.gif', 'extra27.gif', 'extra28.png', 'extra29.png', 'extra30.gif', 'extra31.gif', 'extra32.gif', 'extra33.gif']]
    ];

    sets.forEach(([selector, dir, files]) => {
        const imgs = document.querySelectorAll(selector);
        if (!imgs.length) return;
        const src = dir + pick(files);
        imgs.forEach(img => { img.src = src; });
    });
}

function initAchievementsHover() {
    const section = document.getElementById('achievementsSection');
    const layers = document.querySelectorAll('.achievements-bg-layer');
    if (!section || layers.length < 2) return;

    let activeIndex = -1;

    function show(url) {
        const next = layers[activeIndex === 0 ? 1 : 0];
        if (next.dataset.url !== url) {
            next.classList.add('no-transition');
            next.classList.remove('is-active');
            void next.offsetWidth;
            next.style.backgroundImage = `url('${url}')`;
            next.dataset.url = url;
            next.classList.remove('no-transition');
            void next.offsetWidth;
        }
        next.classList.add('is-active');
        layers.forEach(l => { if (l !== next) l.classList.remove('is-active'); });
        activeIndex = next === layers[0] ? 0 : 1;
    }

    function hide() {
        layers.forEach(l => l.classList.remove('is-active'));
        activeIndex = -1;
    }

    section.addEventListener('mouseover', e => {
        const card = e.target.closest('.achievement-card[data-bg-img]');
        if (card) show(card.dataset.bgImg);
    });

    section.addEventListener('mouseout', e => {
        const card = e.target.closest('.achievement-card[data-bg-img]');
        if (card && !card.contains(e.relatedTarget)) hide();
    });
}

function initPanelToggle() {
    const trigger = document.getElementById('shortFormTrigger');
    const grid = document.getElementById('columnsGrid');
    if (!trigger || !grid) return;

    let thumbsLoaded = false;

    function loadThumbs() {
        if (thumbsLoaded) return;
        thumbsLoaded = true;
        document.querySelectorAll('.video-thumbnail[data-src]').forEach(img => {
            img.src = img.dataset.src;
            delete img.dataset.src;
        });
    }

    trigger.addEventListener('click', e => {
        e.preventDefault();
        const opening = !grid.classList.contains('is-collapsed');
        grid.classList.toggle('is-collapsed', opening);
        if (opening) loadThumbs();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') grid.classList.remove('is-collapsed');
    });
}

function initMapArtsViewer() {
    const gallery = document.getElementById('mapArtsGallery');
    const preview = document.getElementById('mapartsPreviewCol');
    const img = document.getElementById('mapartsViewerImg');
    if (!gallery || !preview || !img) return;

    const statFields = ['name', 'author', 'started', 'finished', 'size', 'staircased', 'blocks', 'madeIn', 'madeWith']
        .map(key => [key, document.getElementById('stat' + key.charAt(0).toUpperCase() + key.slice(1))]);

    const MIN_SCALE = 0.5, MAX_SCALE = 12;
    let scale = 1, posX = 0, posY = 0;
    let isDragging = false, pointerId = null;
    let startX = 0, startY = 0, startPosX = 0, startPosY = 0;

    function applyTransform() {
        img.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
        img.style.cursor = isDragging ? 'grabbing' : (scale > 1 ? 'grab' : 'default');
    }

    function endDrag() {
        if (!isDragging && pointerId === null) return;
        isDragging = false;
        if (pointerId !== null) {
            try { img.releasePointerCapture(pointerId); } catch (_) {}
        }
        pointerId = null;
        applyTransform();
    }

    gallery.addEventListener('click', e => {
        e.preventDefault();
        const item = e.target.closest('.mapart-item');
        if (!item) return;

        const data = SITE_DATA.mapArts[Number(item.dataset.index)];
        if (!data) return;

        img.src = data.full;
        preview.classList.add('has-image');
        scale = 1; posX = 0; posY = 0;
        applyTransform();

        statFields.forEach(([key, el]) => { if (el) el.textContent = data[key] || ''; });

        gallery.querySelectorAll('.mapart-item.is-active').forEach(i => i.classList.remove('is-active'));
        item.classList.add('is-active');
    });

    img.addEventListener('wheel', e => {
        if (!preview.classList.contains('has-image')) return;
        e.preventDefault();
        scale = Math.min(Math.max(scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15), MIN_SCALE), MAX_SCALE);
        applyTransform();
    }, { passive: false });

    img.addEventListener('pointerdown', e => {
        if (!preview.classList.contains('has-image') || e.button !== 0 || isDragging) return;
        e.preventDefault();
        isDragging = true;
        pointerId = e.pointerId;
        startX = e.clientX; startY = e.clientY;
        startPosX = posX; startPosY = posY;
        try { img.setPointerCapture(e.pointerId); } catch (_) {}
        applyTransform();
    });

    img.addEventListener('pointermove', e => {
        if (!isDragging || e.pointerId !== pointerId) return;
        posX = startPosX + (e.clientX - startX);
        posY = startPosY + (e.clientY - startY);
        applyTransform();
    });

    img.addEventListener('pointerup', e => {
        if (e.pointerId === pointerId) endDrag();
    });

    img.addEventListener('pointercancel', endDrag);
    img.addEventListener('lostpointercapture', endDrag);
    img.addEventListener('dragstart', e => e.preventDefault());

    window.addEventListener('blur', endDrag);
    document.addEventListener('visibilitychange', () => { if (document.hidden) endDrag(); });
}