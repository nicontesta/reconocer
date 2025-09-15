---
layout: default
title: Juego de Manos
permalink: /handsgame/
---


## Juego Extendido: Piedra, Papel, Tijera, Tinta  
*Para 3 o más jugadores*

### Gestos de Mano

| Elemento | Descripción del gesto                          | Símbolo sugerido       |
|----------|------------------------------------------------|------------------------|
| Piedra   | Puño cerrado                                   | ✊                     |
| Papel    | Mano abierta (todos los dedos extendidos)      | ✋                     |
| Tijera   | Índice y medio en forma de “V”                 | ✌️                    |
| Tinta    | Puño cerrado con índice señalando (apuntando)  | ☝️ o 👉                |

---

### Reglas del Juego

#### Elementos:
- Piedra, Papel, Tijera, Tinta

#### Resultados posibles:
- **Ganar:** 2 puntos al ganador, 0 al perdedor  
- **Empate:** 1 punto para ambos  
- **Colaboración:** 3 puntos para ambos (solo entre Papel y Tinta)  

#### Relaciones entre elementos:

| Elemento A | Resultado contra Elemento B             | Puntos A / Puntos B |
|------------|-----------------------------------------|---------------------|
| Piedra     | Gana a: Tijera                          | 2 / 0               |
| Piedra     | Pierde contra: Papel                    | 0 / 2               |
| Piedra     | Empata con: Piedra, Tinta               | 1 / 1               |
| Papel      | Gana a: Piedra                          | 2 / 0               |
| Papel      | Pierde contra: Tijera                   | 0 / 2               |
| Papel      | Colabora con: Tinta                     | 3 / 3               |
| Papel      | Empata con: Papel                       | 1 / 1               |
| Tijera     | Gana a: Papel                           | 2 / 0               |
| Tijera     | Pierde contra: Piedra                   | 0 / 2               |
| Tijera     | Empata con: Tijera, Tinta               | 1 / 1               |
| Tinta      | Colabora con: Papel                     | 3 / 3               |
| Tinta      | Empata con: Piedra, Tijera, Tinta       | 1 / 1               |

#### Sistema de puntuación en partidas multijugador

- En cada ronda se considera **cada enfrentamiento por pares** (por ejemplo, A vs B, A vs C, B vs C).
- Cada par se evalúa por separado con las reglas de victoria, empate o colaboración.
- El total de puntos de cada jugador es la **suma de los puntos obtenidos en sus enfrentamientos**.

#### Ejemplo:
Jugadores: A, B, C  
Jugadas:  
- A: Papel  
- B: Papel  
- C: Tinta

Enfrentamientos:  
- A vs B → Papel vs Papel → Empate → 1 / 1  
- A vs C → Papel vs Tinta → Colaboración → 3 / 3  
- B vs C → Papel vs Tinta → Colaboración → 3 / 3

**Resultado total:**  
- A: 1 (empate) + 3 (colaboración) = 4 puntos  
- B: 1 (empate) + 3 (colaboración) = 4 puntos  
- C: 3 + 3 = 6 puntos

📌 Esto hace que el total de puntos por ronda pueda ser **superior a lo habitual** en el juego tradicional.

---

### Estrategias para Juego Multijugador y Extensión con Tinta

1. **Colaboración estratégica entre Papel y Tinta**  
   En partidas con 3 o más jugadores, la colaboración entre Papel y Tinta otorga 3 puntos a ambos, fomentando alianzas tácticas que superan la dinámica clásica de confrontación directa.

2. **Tinta como elemento defensivo para minimizar pérdidas**  
   Tinta empata contra Piedra, Tijera y otros Tinta, lo que ayuda a asegurar puntos en escenarios complejos de múltiples enfrentamientos simultáneos, donde evitar perder es clave.

3. **Diversifica y adapta tus jugadas para partidas múltiples**  
   Con más jugadores, la predictibilidad se reduce; variar entre Piedra, Papel, Tijera y Tinta te permite aprovechar oportunidades y evitar ser fácilmente contrarrestado.

4. **Observa patrones colaborativos y ajusta tu estrategia**  
   Detectar cuándo los oponentes usan Papel o Tinta con frecuencia te permite optar por sumarte a la colaboración o contrarrestarla con Piedra o Tijera según convenga.

---

¡Explora esta versión para partidas más sociales y estratégicas, donde la colaboración y el empate cobran nueva importancia!

---


### Ejemplos

Se pueden simular con el siguiente código en Python:

```python
import random
import pandas as pd

## Elementos y sus gestos
elements = {
    "Piedra": "✊",
    "Papel": "✋",
    "Tijera": "✌️",
    "Tinta": "☝️"
}

## Reglas de enfrentamientos
results = {
    ("Piedra", "Tijera"): (2, 0),
    ("Tijera", "Piedra"): (0, 2),
    ("Papel", "Piedra"): (2, 0),
    ("Piedra", "Papel"): (0, 2),
    ("Tijera", "Papel"): (2, 0),
    ("Papel", "Tijera"): (0, 2),
    ("Papel", "Tinta"): (3, 3),
    ("Tinta", "Papel"): (3, 3),
    ("Piedra", "Tinta"): (1, 1),
    ("Tinta", "Piedra"): (1, 1),
    ("Tijera", "Tinta"): (1, 1),
    ("Tinta", "Tijera"): (1, 1),
    ("Tinta", "Tinta"): (1, 1),
    ("Piedra", "Piedra"): (1, 1),
    ("Papel", "Papel"): (1, 1),
    ("Tijera", "Tijera"): (1, 1),
}

## Jugadores
players = ["A", "B", "C"]

## Función para obtener puntuación por par
def get_points(a, b):
    if a == b:
        return 1, 1
    return results.get((a, b), (0, 2))

## Simulación de 30 rondas
choices_log = []
points_log = {p: [] for p in players}

for _ in range(30):
    round_choices = [random.choice(list(elements.keys())) for _ in players]
    round_points = {p: 0 for p in players}

    ## Comparar todos los pares
    for i in range(len(players)):
        for j in range(i + 1, len(players)):
            p1, p2 = players[i], players[j]
            c1, c2 = round_choices[i], round_choices[j]
            pts1, pts2 = get_points(c1, c2)
            round_points[p1] += pts1
            round_points[p2] += pts2

    ## Registrar
    for p in players:
        points_log[p].append(round_points[p])
    choices_log.append([elements[c] for c in round_choices])

## Crear DataFrame con gestos y puntos
gestures_df = pd.DataFrame(choices_log, columns=[f"Jugador {p}" for p in players])
points_df = pd.DataFrame(points_log, columns=players)
points_df.columns = [f"Puntos {p}" for p in players]
final_df = pd.concat([gestures_df, points_df], axis=1)
final_df.index = [f"Ronda {i+1}" for i in range(30)]

## Mostrar tabla
print(final_df.to_markdown())
```

---


## Variación: Control, Propaganda, Censura, Sátira
*Extensión de "Piedra, Papel o Tijera" para 3 o más jugadores*

### Prólogo: Cuando la tinta se cansa

Quevedo manejaba la tinta como un maestro de la ironía, punzante y certero como pocos supieron serlo.
Escribía con la naturalidad de quien respira, y la pluma era la prolongación filosa de su pensamiento, creando mundos, reglas y ficciones que desnudaban la hipocresía y el absurdo. Jugaba con el lenguaje no para ostentar poder, sino para reclamar la libertad de criticar sin miramientos y revelar esas verdades incómodas que solo un artista genuino se atreve a decir, sin someterse a dogmas ni vanidades.

Pero un día, ese juego se volvió imposible.
Torquemada blandió las tijeras dispuesto a cortar todo lo que no encajara.
Goebbels tomó el papel y lo transformó en propaganda.
Stalin agarró la piedra y, con ella, dictó la historia a martillazos.

El tablero ya no era libre.

Fue entonces cuando Quevedo se cansó.
Dejó de jugar.

Porque cuando cada gesto se convierte en arma, la tinta ya no fluye: se endurece, se encierra, se vuelve silencio.

Este juego nace de esa retirada.
Una versión extendida del clásico — piedra, papel o tijera —, donde la tinta vuelve a la partida — no para imponerse — , sino para abrir espacio a la colaboración, al empate, al equilibrio inestable entre creación y poder.

Aquí, cada gesto cuenta.
No solo se gana: se colabora, se empata, se resiste y hasta se puede conspirar.

Porque en tiempos de censura, propaganda y dogma…
jugar también puede ser una forma de escribir.

---

### ✋🤝 Gestos de Mano

| Elemento    | Gesto (descripción)                          | Símbolo sugerido |
|-------------|----------------------------------------------|------------------|
| Control     | Puño cerrado                                 | ✊               |
| Propaganda  | Mano abierta                                 | ✋               |
| Censura     | Puño cerrado con índice señalando            | ☝️               |
| Sátira      | Índice y medio en forma de “V”               | ✌️               |

---

### ⚖️ Reglas del Juego

#### Elementos:
- **Control**, **Propaganda**, **Censura**, **Sátira**

#### Resultados posibles por enfrentamiento entre dos jugadores:
- **Ganar** → 2 puntos al ganador, 0 al perdedor  
- **Empatar** → 1 punto para ambos  
- **Colaborar** → 3 puntos para ambos (casos específicos)  
- **Anularse** → 0 puntos para ambos (casos específicos)  

⚠️ **Importante**:  
> En partidas de 3 o más jugadores, cada jugador obtiene su puntaje como la **sumatoria de todos sus enfrentamientos por pares** durante esa ronda.

---

#### 🔄 Interacciones entre Elementos

| De / Contra | Control ✊ | Propaganda ✋ | Censura ☝️ | Sátira ✌️ |
|-------------|------------|----------------|--------------|-------------|
| **Control**     | Empate (1/1)     | Colaboración (3/3) | Anulación (0/0)   | Pierde (0/2)   |
| **Propaganda**  | Colaboración (3/3) | Anulación (0/0)    | Pierde (0/2)      | Colaboración (3/3) |
| **Censura**      | Anulación (0/0)   | Gana (2/0)         | Empate (1/1)      | Gana (2/0)     |
| **Sátira**       | Gana (2/0)        | Colaboración (3/3) | Pierde (0/2)      | Empate (1/1)   |

---

#### 🤝 Colaboraciones
- **Control + Propaganda** → 3 puntos cada uno  
- **Propaganda + Sátira** → 3 puntos cada uno  

#### 🚫 Anulaciones
- **Propaganda + Propaganda** → 0 puntos ambos  
- **Censura + Control** → 0 puntos ambos  

---

#### 🧠 Estrategias Sugeridas

1. **Colabora cuando puedas**  
   Las combinaciones de colaboración otorgan más puntos que una victoria directa (3 > 2).

2. **Evita coincidencias que anulen tu jugada**  
   Propaganda contra sí misma o contra Censura puede resultar inútil (0 puntos).

3. **Sátira es disruptiva pero riesgosa**  
   Gana a Control y colabora con Propaganda, pero pierde ante Censura.

4. **Censura tiene potencial ofensivo**  
   Puede ganar a Propaganda y Sátira, pero pierde toda su fuerza si se encuentra con Control.

5. **Control es versátil pero vulnerable**  
   Asegura colaboración con Propaganda y empate con sí mismo, pero cuidado con Censura y Sátira.

#### 🧪 Ejemplo de Ronda

**Jugadores:**  
- Jugador A: Control ✊  
- Jugador B: Propaganda ✋  
- Jugador C: Sátira ✌️  

---

#### 🤼‍♂️ Enfrentamientos por Pares

1. **A vs B** → Control 🤝 Propaganda → **Colaboración (3 / 3)**  
2. **A vs C** → Control ❌ Sátira → **Pierde / Gana (0 / 2)**  
3. **B vs C** → Propaganda 🤝 Sátira → **Colaboración (3 / 3)**  

---

#### 🧮 Cálculo de Puntos Totales

| Jugador | Detalle del Puntaje                      | Total |
|---------|-------------------------------------------|--------|
| A       | vs B → 3 pts, vs C → 0 pts               | **3**  |
| B       | vs A → 3 pts, vs C → 3 pts               | **6**  |
| C       | vs A → 2 pts, vs B → 3 pts               | **5**  |

---

#### 🏁 Resultado Final de la Ronda

| Jugador  | Gesto         | Puntos |
|----------|---------------|--------|
| A        | ✊ (Control)   | 3      |
| B        | ✋ (Propaganda)| 6      |
| C        | ✌️ (Sátira)   | 5      |

---

✅ **Observaciones**:
- B y C sacan ventaja al colaborar con Propaganda.
- A queda atrás al ser derrotado por Sátira.
- Las colaboraciones bien ubicadas pueden ser más valiosas que una victoria directa.


---

¡Experimenta nuevas alianzas, crea tensiones estratégicas y redefine el equilibrio clásico con esta versión ampliada del juego!

### Simulación
```python
##
import random
import pandas as pd

## Elementos y sus gestos
elements = {
    "Control": "✊",
    "Propaganda": "✋",
    "Censura": "☝️",
    "Sátira": "✌️"
}

## Reglas por pares
rules = {
    ("Control", "Control"): (1, 1),
    ("Control", "Propaganda"): (3, 3),
    ("Control", "Censura"): (0, 0),
    ("Control", "Sátira"): (0, 2),
    ("Propaganda", "Propaganda"): (0, 0),
    ("Propaganda", "Censura"): (0, 2),
    ("Propaganda", "Sátira"): (3, 3),
    ("Censura", "Censura"): (1, 1),
    ("Censura", "Sátira"): (2, 0),
    ("Sátira", "Sátira"): (1, 1),
}

## Reglas simétricas
all_elements = list(elements.keys())
for a in all_elements:
    for b in all_elements:
        if (a, b) not in rules and (b, a) in rules:
            s1, s2 = rules[(b, a)]
            rules[(a, b)] = (s2, s1)

## Simulación de 10 rondas
players = ["A", "B", "C"]
rounds = 10
results = []

for _ in range(rounds):
    choices = {p: random.choice(all_elements) for p in players}
    scores = {p: 0 for p in players}
    for i in range(len(players)):
        for j in range(i + 1, len(players)):
            p1, p2 = players[i], players[j]
            e1, e2 = choices[p1], choices[p2]
            s1, s2 = rules[(e1, e2)]
            scores[p1] += s1
            scores[p2] += s2
    results.append({
        "Gestos": {p: f"{elements[choices[p]]} ({choices[p]})" for p in players},
        "Puntos": scores
    })

## Mostrar resultados
gestures_df = pd.DataFrame([r["Gestos"] for r in results])
scores_df = pd.DataFrame([r["Puntos"] for r in results])
combined_df = gestures_df.add_prefix("Gesto ").join(scores_df.add_prefix("Puntos "))
combined_df.index = [f"Ronda {i+1}" for i in range(rounds)]

## Total de puntos por jugador
total_scores = scores_df.sum().rename("Total")

## Imprimir resultados
print("Tabla de rondas:")
print(combined_df.to_markdown())
print("\nPuntaje total por jugador:")
print(total_scores.to_string())

```
---


