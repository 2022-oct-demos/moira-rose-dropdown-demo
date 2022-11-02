![wireframe of dropdown demo with html elements outlined](/assets/Screen%20Shot%202022-11-02%20at%209.34.12%20AM.png)

HTML

-   slice 1 (wig select funtionality)

    -   section
        -   div
            -   label
            -   select
                -   options for each img (with values)
            -   img
            -   counter div

-   slice 2 (location selector functionality)

    -   duplicate for location

-   slice 3 - phrases input and list functionality
    -   section
        -   label
        -   input
        -   button
        -   ul

STATE

-   wig change counter (slice 1)
-   location change counter (slice 2)
-   aphorisms array (slice 3)

EVENTS

-   wig select (on change)- slice 1

    -   user selection used for img display
    -   increment wig counter
    -   update view (display state change)

-   location select (on change) - slice 2

    -   same as above but for location

-   'add' button (on click)- slice 3
    -   push the input value into the array in state
    -   display all of the aphorisms in the array
    -   (bonus) reset the input value (to empty)
