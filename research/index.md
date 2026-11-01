---
title: Research
nav:
  order: 1
  tooltip: Our research areas
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

We use first-principles electronic structure theory, excited-state and quantum dynamics simulations, and data-driven methods to understand how functional materials work at the atomic scale, and then use that understanding to design better ones.

{% include section.html %}

## Materials for Next-generation Optoelectronic Devices

{% capture floatcontent %}
{% include figure.html image="images/research/optoelectronics.png" width="220px" %}
{% endcapture %}

{% include float.html content=floatcontent flip=true %}

Optoelectronic devices such as solar cells, light-emitting devices, and thin-film transistors play an important role in clean energy generation and in minimizing energy demand.
However, highly efficient and cost-effective materials are prerequisites for making these devices widely applicable in the real world.

We perform in-depth computational investigations to identify potential materials for optoelectronics.
We search for new, unexplored material classes and seek to understand the fundamental processes that influence the performance of existing candidates.
Topics we are currently interested in include:

- Simulations that combine mixed quantum–classical **non-adiabatic molecular dynamics (NAMD)** and **time-dependent density functional theory (TD-DFT)** to study charge-carrier transport and recombination in emerging optoelectronic materials such as halide perovskites, kesterites, and organic crystals.
- **Ab initio molecular dynamics (AIMD)** and **DFT** to explore the effect of lattice dynamics, point defects, and extended defects on optoelectronic and photovoltaic properties.
- **Ion migration** and its impact on the performance and stability of materials, using AIMD and nudged elastic band methods.
- In-silico materials design and interface engineering for **harvesting hot carriers** to realize highly efficient photovoltaic devices.

{% include section.html %}

## Charge Dynamics at Interfaces for Photocatalysis

{% include figure.html image="images/research/photocatalysis.png" %}

We perform in-depth computational investigations to identify potential materials for heterogeneous catalysis.
We are also investigating linker and nodal functionalization to tune the electronic, magnetic, ion-transport, and catalytic properties of **metal–organic frameworks (MOFs)**.
Our toolbox includes:

- **DFT-based simulations** — predicting and understanding the electronic structure of catalysts and MOFs by integrating quantum computational chemistry, surface electrochemistry, and materials science.
- **AIMD simulations** — exploring the structural dynamics and stability of materials under realistic conditions to understand their behavior and performance in catalytic applications.
- **NAMD simulations** — simulating excited charge dynamics to calculate charge-carrier lifetimes, with a focus on the effects of strong electron–phonon coupling on non-radiative recombination.
- **Machine learning** — training models on electronic structure data to streamline catalyst and MOF discovery.

By combining DFT, AIMD, NAMD, and ML, we systematically study the effects of doping, defects, and interface engineering on materials including MOFs.
Our goal is to design materials and interfaces with enhanced catalytic performance, and MOFs that can be used efficiently for magnetic, ion-transport, electronic, and catalytic applications.

{% include section.html %}

## High-throughput and Machine Learning for Functional Materials Design

{% include figure.html image="images/research/machine-learning.png" %}

We use high-throughput and machine learning (ML)–based computational frameworks to accelerate functional materials design and discovery.
This data-driven approach also provides an atomistic understanding of the complex functionalities of these materials, uncovering hidden relationships between elemental and compound properties and their phase stability and performance metrics.

We are developing high-accuracy supervised ML models — including interpretable and graph neural network models and machine-learned force fields — to provide universal strategies for designing and discovering efficient optoelectronic materials, particularly for LEDs, detectors, and solar cells.

{% include section.html %}

## Inorganic Nanocrystals for LEDs and Single-Photon Emitters

{% include figure.html image="images/research/nanocrystals.png" %}

Single-photon emitters (SPEs) are key elements of any quantum photonic circuit.
Inorganic zero-dimensional nanocrystals (NCs) have recently emerged as potential SPE candidates, and the atomic-scale details of their structural and optoelectronic properties are very important for their performance.
Similarly, controlled and precise emission from quantum dots is highly desirable for light-emitting devices.
We employ AIMD, DFT, TD-DFT, and NAMD simulations to investigate:

- The surface and interface properties of inorganic NCs, focusing on electron–surface phonon interactions to strategically design passivating agents that enhance single-photon emission.
- The surface chemistry and size of non-stoichiometric NCs to tune their optoelectronic and emission properties.
- The stability and impact of controlled chemical doping in NCs.

{% include section.html %}

## Methods

{% capture col1 %}
**Electronic structure**  
Density functional theory (DFT)  
Time-dependent DFT (TD-DFT)  
Nudged elastic band (NEB)
{% endcapture %}

{% capture col2 %}
**Dynamics**  
Ab initio molecular dynamics (AIMD)  
Non-adiabatic molecular dynamics (NAMD)  
Machine-learned force fields
{% endcapture %}

{% capture col3 %}
**Data-driven design**  
High-throughput screening  
Interpretable machine learning  
Graph neural networks
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% include section.html %}

## Collaborators

We are grateful to work with excellent experimental and theoretical collaborators:

{% capture col1 %}
- Dr. Sergei Tretiak, Los Alamos National Laboratory, USA
- Dr. Wanyi Nie, Los Alamos National Laboratory, USA
- Dr. Sergei Ivanov, Los Alamos National Laboratory, USA
- Dr. Anjana Talapatra, Los Alamos National Laboratory, USA
- Prof. Sam Stranks, Cavendish Laboratory, University of Cambridge, UK
- Prof. Saiful Islam, University of Oxford, UK
- Prof. Mojtaba Abdi-Jalebi, University College London, UK
- Prof. Sameer Sapra, IIT Delhi
- Prof. Praveen Ingole, IIT Delhi
- Prof. Bijay P. Tripathi, IIT Delhi
{% endcapture %}

{% capture col2 %}
- Dr. Satyaprasad Senanayak, NISER Bhubaneswar
- Prof. Ujjal K. Gautam, IISER Mohali
- Prof. Arijit K. De, IISER Mohali
- Prof. Kamalakannan Kailasam, INST Mohali
- Prof. Prabeer Barpanda, IISc Bangalore
- Prof. Akshay Singh, IISc Bangalore
- Prof. Deepak Chopra, IISER Bhopal
- Prof. K. D. M. Rao, IACS Kolkata
- Prof. Soumitra Satapathi, IIT Roorkee
- Prof. Koushik Pal, IIT Kanpur
{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}
