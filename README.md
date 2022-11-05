# custom-related-posts

This is a customized version of the custom-related-posts plugin (https://wordpress.org/plugins/custom-related-posts/).
I had a need to allow the widget to filter related posted based on the post_type of the related posts. Out of the box,
the plugin did not support that option. After digging through the code, found out how to manipulate it to allow the filtering,
and viola! Here we are. 

## Installation

Installing this version of the plugin is exactly the same as installing the original plugin.

## Settings

Settings for the plugin itself have not been changed.

## Widget Changes

When adding the widget, there is a new option to set: Filter. This option displays the list of post_types that were selected in the 
main settings page for the splugin. To have a complete, unfiltered list, simply leave the option blank. To display related posts of a particular
type, select that post type from the drop down. 

## NOTE

A nore and a warning. The post_type was added to the relation object and is only fetched at the time the relation is created. What does this mean? It means that it will not affect existing relations, but only those that are going forward. Since I'm starting from scratch, this doesn't affect me, so it is not included as an upgrade process. Maybe if I get some time in the future, I'll add it in, but at this point, it's way low on my list.

## License

As the original plugin was licenced under the GPLv2 or later, so  too does this variation also fall under the same license.

License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Included is also [the original readme.txt](readme.txt)

## Changelog

2022-11-05 - Updated base plugin to version 1.7.0

2022-07-25 - Initial development/customization.