Debug-Protokoll: Background Color Changer

Behobene Fehler

1. Array-Syntax-Fehler
Problem: Fehlende Kommas zwischen Array-Elementen  
Lösung: Kommas nach #2C2C2C, #616A6B und #4A235A hinzugefügt

2. Math-Objekt Schreibfehler
Problem: math.random() mit kleinem "m"  
Lösung: Math.random() - Großschreibung korrigiert

3. querySelector Schreibfehler
Problem: document.queryselector() mit kleinem "s"  
Lösung: document.querySelector() - camelCase korrigiert

4. ID-Selektor fehlt
Problem: querySelector("bg-hex-code") ohne Hash-Symbol  
Lösung: querySelector("#bg-hex-code") - Hash-Symbol hinzugefügt

5. Funktionsaufruf statt Referenz
Problem: getRandomIndex ohne () beim Array-Zugriff  
Lösung: getRandomIndex() - Klammern hinzugefügt um Funktion aufzurufen

6. Button-ID angepasst
Problem: click-btn existiert nicht im HTML  
Lösung: Zu btn geändert (passend zum HTML)

7. Sofortiger Funktionsaufruf bei onclick
Problem: btn.onclick = changeBackgroundColor() ruft Funktion sofort auf  
Lösung: btn.onclick = changeBackgroundColor - Klammern entfernt für Funktionsreferenz

Funktionalität
Ändert die Hintergrundfarbe beim Button-Klick zu einer zufälligen dunklen Farbe aus dem Array.