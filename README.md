
Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

Ontwerpprobleem & Oplossing

Ontwerpprobleem

Als onderzoeker wil ik eenvoudig nieuwe boeken kunnen toevoegen aan een catalogus, zodat bezoekers altijd toegang hebben tot actuele en volledige informatie. De uitdaging was om een formulier te ontwerpen dat duidelijk, gebruiksvriendelijk en foutloos is, zonder dat de gebruiker hoeft te twijfelen over wat er ingevuld moet worden.

<img width="752" height="426" alt="image" src="https://github.com/user-attachments/assets/db999600-0dd1-4d61-a914-2854488fd04f" />
<img width="323" height="217" alt="image" src="https://github.com/user-attachments/assets/5cf7a671-64b4-458c-a390-94411e8cdf2a" />

## Beschrijving

Interactie

De belangrijkste interactie in deze website is het catalogusformulier. Met dit formulier kan een gebruiker onder andere:
Een boektitel invoeren
De auteur toevoegen
Een publicatiejaar selecteren
Een categorie kiezen
Het boek opslaan in de catalogus

## Ontwerpkeuzes

Feedback

Bij foutief ingevulde velden (zoals een leeg verplicht veld) krijgt de gebruiker directe visuele feedback, bijvoorbeeld door een foutmelding of een rode rand.
Na het succesvol versturen van het formulier krijgt de gebruiker een bevestiging dat het boek is toegevoegd.

Feedforward

Placeholder-tekst en korte instructies in het formulier laten vooraf zien wat er verwacht wordt.
Labels boven de invoervelden maken direct duidelijk welke informatie ingevuld moet worden.
Gebruik van labels en principes
Elk invoerveld heeft een duidelijk label voor toegankelijkheid en duidelijkheid.
De volgorde van de velden volgt een logische leesrichting (van boven naar beneden).
Knoppen hebben duidelijke call-to-actions zoals “Boek toevoegen”.

User test

Tijdens een korte gebruikerstest bleek dat gebruikers het formulier snel begrepen en zonder uitleg konden invullen. 
Eén gebruiker gaf aan dat de interactie duidelijke was bij de formulier. 
https://kurollos.github.io/fix-the-flow-interactive-website/boekencatalogs/catalogsembassy.html

## Kenmerken

HTML

Het formulier is opgebouwd met semantische HTML:
<form> voor het formulier
<label> en <input> voor invoervelden
<select> voor categorieën
<button> voor het verzenden
Door labels te koppelen aan inputs is het formulier toegankelijker.

CSS

CSS wordt gebruikt voor:
De layout en uitlijning van het formulier
Visuele feedback (hover, focus, foutmeldingen)
Duidelijke hiërarchie tussen labels, invoervelden en knoppen  

JavaScript

JavaScript zorgt voor:
Validatie van het formulier (controle op lege velden)
Het tonen van foutmeldingen en succesfeedback

Werking van de interactie
De gebruiker vult het formulier in (HTML).
CSS zorgt voor duidelijke styling en feedback bij interactie.
JavaScript controleert de invoer en geeft feedback.
Bij een geldig formulier wordt het boek toegevoegd aan de catalogus

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

