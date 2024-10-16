# Purpose

The utils folder contains utility functions, which are small, reusable, and independent pieces of logic that can be used across your application. Utility functions should generally be pure and have no side effects. They are useful for performing common operations like formatting data, performing calculations, or manipulating strings/arrays.

# How to Use Utils

To use a utility function, simply import it into your component or module. For example:

# typescript

# Example of importing a utility function from utils folder

import { formatDate } from './utils/formatDate';
const formattedDate = formatDate(new Date());
