# Dashboard

- `/`
    - statystyki dziesiejszych zamowien (zdalne i lokalne)
    - liste rezerwacji i eventow zaplanowanych na dzisiaj

# Logowanie

- `/login`
    - pola na login i haslo
    - guzik do zalogowania (link do dashboard)

# Widok dostepnosci stolikow

- `/tables`
    - wybór daty i godziny tabela z listą rezerwacji oraz wydarzeń - każda kolumna = 1 stolik - każdy wiersz = 30 min - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są stoliki - po kliknięciu rezerwacji/eventu, przechodzimy na stronę szczegółów

- `/tables/booking/:id`
    - zawiera wszystkie informacje o rezerwacji
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
    - analogicznie j.w., bez początkowych informacji
- `/tables/events/:id`
    - analogicznie j.w., dla eventów
- `/tables/events/new`
    - analogicznie j.w., dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
    - tabela
        - wiersze = stoliki
        - kolumny = różne info (status, czas od ostatniej aktywności)
        - ostatnia kolumna - akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwota zamówienia
- `/waiter/order/:id`
    - jak powyzej

# Widok kuchni

- `/kitchen`
    - wyświetla listę zamówień w kolejności złożenia
    - lista musi zawierać
        - numer stolika (lub zamówienia zdalnego)
        - pełne info o zamówionych daniach
    - na liście możliwość oznaczenia zamówienia jako zrealizowane