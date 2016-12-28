# VS-Single-Element-Seed

Yomen template to generate polymer single element Seed

## Setup

- Install yomen generator globally 

```npm i  -g yo generator-generator polymer-cli```

- Initialize generator 

```mkdir generator-polymer-init-vs-single-element-seed && cd "$_" && yo```

Yomen generator will prompt you with a selection menu, do the following:
- select 'generator' from this list by press 'Enter' key
- default generator name "generator-polymer-init-vs-single-element-seed", press Enter
- enter generator description "VS single element seed template"
- skip all other steps configuration

At this point, yomen generator will create a bunch of file and placeholder template. 

Custom preinstall and postinstall scripts in package.json will run before and after the packages installation
- preinstall: rename bowerrc, gitignore, gitmodules file name
- postinstall: setup new component with git init, and add remote origin

Let's replace the default template with our own:

- Remove the defualt template

```cd generators/ && rm -rf app/```

- Checkout the source code of the template to "generator-polymer-init-vs-single-element-seed/generators/"

```git clone ssh://git@stash.lbidts.com/fewdw/vs-polymer-template-seeds.git .```

```git checkout release/vs-single-element-seed```

```npm link```


