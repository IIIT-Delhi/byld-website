# Contributing

When contributing to this repository, the changes will come under the following categories:

1. Data Update:
   If it's your personal identification information, please create a PR without creating an
   issue for it.
   If it's regarding an event, kindly create a new issue to discuss it first before making a
   PR.
2. Layout Update:
   These changes also must be accompanied with an issue. First discuss it with someone by
   creating an issue and then go on to make a PR. Also do not work on the PR unless assigned
   to it.

For any kind of changes, we have a detailed document describing the process at 
[https://github.com/IIIT-Delhi/byld-website/wiki/Contributing](
https://github.com/IIIT-Delhi/byld-website/wiki/Contributing). Feel free to ask questions
to any of the admins/members in case you get stuck while contributing.

## Some important points for the people helping with layout updates:

* The website is built with Jekyll, so most of the configuration will be found in _config.yml
* The _includes/ folder has all html files that contain major snippets of a webpage. This is the
  place that is meant to contain stuff that can be thought of as a pluggable piece of code that is
  re-usable (in short, can be included somewhere).
* The _layouts/ folder has all html files that define the layout of pages. This is the place for
  anything that can be used on multiple pages as a base to be extended.
* The _members/ folder has files that will render the webpage of any amibitous member. This is the
  place if you want to claim a webpage on Byld's website and describe your journey with byld or about
  your cool projects.
* The assets folder has all the js, image and css files that will be used while rendering the page
* All files at the root level - index.md, hackathons.md, etc etc are rendered as different pages
  on the site.
* travis.yml: This is the file that contains our build process, and should ideally be the place to look
  at if you want to reproduce the errors on CI locally
* netlify.toml: This file helps to build the site-previews on netlify

You can also activate travis and netlify on your forks, and without any further changes, reproduce the
build environment using these files.

## Commit message guidelines

For a PR to be accepted, the commit message must describe the changes in a meaningful way
and also ideally refer to the issue that it addresses. 
In case it is a data update, a good commit message would look like:
```
members.md: Update data for <member's_first_name/github id>
```
