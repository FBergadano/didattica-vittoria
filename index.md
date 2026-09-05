---
layout: home
title: "Bergadano Didattica — Liceo Vittoria"
---

<header class="hero">
  <p class="hero-eyebrow">Liceo Vittoria · Torino</p>
  <h1 class="hero-title">Matematica e Fisica<br></h1>
  <p class="hero-subtitle">
    Materiale didattico interattivo per i miei corsi al Liceo Vittoria.
    Scegli un argomento per accedere agli appunti, simulazioni ed esercizi.
  </p>
</header>

<main class="courses-section">
  <div class="courses-group">
    <h2 class="courses-group-title">Scegli un argomento</h2>
    <div class="courses-grid">
      {% assign argomenti = site.corsi | where: "layout", "corso" | sort: "ordine" %}
      {% for corso in argomenti %}
      {% assign card_class = "phys" %}
      {% if corso.materia == "cittadinanza" %}{% assign card_class = "citt" %}{% endif %}
      <a href="{{ corso.url | relative_url }}" class="course-card {{ card_class }}">
        <p class="card-tag">{{ corso.materia | capitalize }}</p>
        <p class="card-name">{{ corso.title }}</p>
        <span class="card-arrow" aria-hidden="true">→</span>
      </a>
      {% endfor %}
    </div>
  </div>
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
    <div class="info-item">
      <p class="info-item-label">Anno scolastico</p>
      <p class="info-item-value">2025–2026</p>
    </div>
  </div>
</section>
