---
title: Handlers
---

In uSync a Handler manages the reading and writing of the uSync Settings from the physical disk of the installation.

Handlers don't do the actual importing or exporting of items that work is done by the [Serializers](../serializers).

### Handler Groups 
Handlers are grouped within the main uSync.Config file, these groups allow you (and other uSync tools) to use different sets of handlers depending on the groups. 

```xml title="/config/uSync8.config"
<Handlers Name="default">
 <Handler Alias="dataTypeHandler" Enabled="true" Actions="All" />
 <Handler Alias="languageHandler" Enabled="true" Actions="All" />
 <Handler Alias="macroHandler" Enabled="true" Actions="All" />
 <Handler Alias="memberTypeHandler" Enabled="true" Actions="All" />
 <Handler Alias="templateHandler" Enabled="true" Actions="All" />
 <Handler Alias="contentTypeHandler" Enabled="true" Actions="All" />
</Handlers>
```

### Properties 

Property    | Values                    | Notes
----------- | -------------             | ----------
Enabled     | true/false                | Turns this handler on/off within the handler group.
Actions     | All,Import,Export,Report  | Turns the handler on/off for specific actions, by default all handlers are on for all actions. 

### Handler Specific Settings, 

Handlers can have their own settings, which can control specific behaviors based on the handler, for example Content Handlers can have `Include` and `Exclude` settings that limit exports to certain content paths.

These settings take the form of an extra Add value underneath the Handler e.g.`<Add Key='[key]' Value='[value]' />

```xml title="/config/usync8.config"
<Handler Alias="contentTypeHandler" Enabled="true" Actions="All">
    <Add Key="CreateOnly" Value="true" />
</Handler>
```

#### Global settings 
The following settings work for all Handlers.

:::danger uSync 8.7+ only
Global handler settings require uSync v8.7 or above.
:::


Key | Values | Note
----|--------|------
CreateOnly | True/False | Items are created if they do not exist, but existing items are not synced.
IgnoreAliases | String | List of aliases of items you don't want the handler to import.

### Handler Specific Settings
For more info see the specific handler docs.

Handler | Key | Value | Note
--------|-----|-------|------
Content/Media | Include | Content Path | See [Content Handler Documentation](../../ContentEdition/contentHandler/).
 | Exclude | Content Path 
 | RulesOnExport | True / False 
Dictionary | OneWay | True/False | Legacy same as CreateOnly see [Dictionay Handler documentation for more info](../../ContentEdition/dictionaryHandler/).
DataTypes | NoConfigNames | String | List of datatypes by name that you don't want to import the configuration for.
 | NoConfigEditors | String | List of editor aliases of items you don't want the configuration to be imported for.


### Exporting
Items get to disk in one of two ways; either a user triggers an export via the uSync dashboard or uSync detects a change and triggers a single export of an item. 

Handlers listen for the save/delete/move events and trigger exports when things change.

### Importing
Depending on settings, Handlers can import settings either at startup of your site or when you trigger an import via the uSync dashboard. 

#### Forced Import
Typically an import will only attempt to update items that have changed. This is for both speed and consistency. You can however force an import which will update all items regardless of if they have changed or not since the last import. 


