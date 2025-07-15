
# Web Development Project 5 - *AstroDash*

Submitted by: **Debashrestha Nandi**

This web app: **A comprehensive celestial object database that displays detailed information about stars, planets, satellites, and galaxies with real-time search and filtering capabilities. Features include magnitude data, constellation information, distance measurements, and temperature readings in an elegant space-themed interface.**

Time spent: **26** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays 12 unique celestial objects, one per row
  - The dashboard includes at least two features in each row (magnitude, constellation, distance, temperature)
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Total number of celestial objects in the database*
    - *Brightest magnitude value among all objects*
    - *Average distance of all objects in light years*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using object type (Star, Planet, Satellite, Galaxy) 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - Search uses text input, type filter uses dropdown selection
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] Beautiful space-themed dark purple gradient design
* [x] Real-time clock display showing current time and date
* [x] Glassmorphism effects with backdrop blur and translucent cards
* [x] Interactive hover effects and smooth animations
* [x] Type-specific badges with color coding for different celestial object types
* [x] Comprehensive data display including magnitude, constellation, distance, and temperature
* [x] Moon phase information for satellite objects
* [x] Professional astronomy dashboard layout with statistics cards
* [x] Responsive design that works on all device sizes




## Notes

The main challenge was creating an authentic astronomy database interface that accurately represents celestial object data while maintaining visual appeal. Implementing the real-time search and filtering system required careful state management to ensure smooth user interactions. The glassmorphism design effects needed precise tuning of backdrop blur and transparency values to achieve the desired space-themed aesthetic without compromising readability.

## License

    Copyright [2025] [Debashrestha Nandi]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
