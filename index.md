---
layout: home
title: "Didattica Vittoria"
---

<header class="hero">
  <p class="hero-eyebrow">Liceo Vittoria · Torino</p>
  <h1 class="hero-title">Matematica e Fisica<br></h1>
  <p class="hero-subtitle">
    Materiale didattico interattivo per i miei corsi al Liceo Vittoria.
    Scegli un argomento per accedere agli appunti, simulazioni ed esercizi.

    Per segnalare errori, suggerimenti, o qualsiasi altra cosa, potete contattarmi alla mail <a href="mailto:fulvio.bergadano@vittoriaweb.it">fulvio.bergadano@vittoriaweb.it</a>
  </p>
</header>

<main class="courses-section">

  {% assign corsi_matematica = site.corsi | where: "layout", "corso" | where: "materia", "matematica" | sort: "ordine" %}
  {% if corsi_matematica.size > 0 %}
  <div class="courses-group">
    <h2 class="courses-group-title">Matematica</h2>
    <div class="courses-grid">
      {% for corso in corsi_matematica %}
      <a href="{{ corso.url | relative_url }}" class="course-card math">
        <p class="card-tag">Matematica</p>
        <p class="card-name">{{ corso.title }}</p>
        <span class="card-arrow" aria-hidden="true">→</span>
      </a>
      {% endfor %}
    </div>
  </div>
  {% endif %}

  {% assign corsi_fisica = site.corsi | where: "layout", "corso" | where: "materia", "fisica" | sort: "ordine" %}
  {% if corsi_fisica.size > 0 %}
  <div class="courses-group">
    <h2 class="courses-group-title">Fisica</h2>
    <div class="courses-grid">
      {% for corso in corsi_fisica %}
      <a href="{{ corso.url | relative_url }}" class="course-card phys">
        <p class="card-tag">Fisica</p>
        <p class="card-name">{{ corso.title }}</p>
        <span class="card-arrow" aria-hidden="true">→</span>
      </a>
      {% endfor %}
    </div>
  </div>
  {% endif %}

  {% assign corsi_cittadinanza = site.corsi | where: "layout", "corso" | where: "materia", "cittadinanza" | sort: "ordine" %}
  {% if corsi_cittadinanza.size > 0 %}
  <div class="courses-group">
    <h2 class="courses-group-title">Cittadinanza</h2>
    <div class="courses-grid">
      {% for corso in corsi_cittadinanza %}
      <a href="{{ corso.url | relative_url }}" class="course-card citt">
        <p class="card-tag">Cittadinanza</p>
        <p class="card-name">{{ corso.title }}</p>
        <span class="card-arrow" aria-hidden="true">→</span>
      </a>
      {% endfor %}
    </div>
  </div>
  {% endif %}

</main>

<section class="info-strip">
  <div class="info-strip-inner">
    <div class="info-item">
      <p class="info-item-label">Docente</p>
      <p class="info-item-value">Prof. Fulvio Bergadano</p>
    </div>
    <div class="info-item">
      <p class="info-item-label">Istituto</p>
      <p class="info-item-value">Liceo Vittoria · Torino</p>
    </div>
    <div class="info-item">
      <p class="info-item-label">Materie</p>
      <p class="info-item-value">Matematica · Fisica · Cittadinanza</p>
    </div>
  </div>
</section>
