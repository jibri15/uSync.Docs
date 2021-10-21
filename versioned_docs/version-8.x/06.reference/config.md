---
title: uSync8.config
---

The main config for uSync is stored in the `usync8.config` file. Most of the main settings in this file can be changed in the uSync dashboard.

```xml title="/config/uSync8.config"
<?xml version="1.0" encoding="utf-8"?>
<uSync>
  <BackOffice>
    <Folder>~/uSync/v8/</Folder>
    <FlatFolders>True</FlatFolders>
    <ImportAtStartup>False</ImportAtStartup>
    <ExportAtStartup>False</ExportAtStartup>
    <ExportOnSave>True</ExportOnSave>
    <UseGuidFilenames>False</UseGuidFilenames>
    <BatchSave>False</BatchSave>
    
    <!-- handler sets -->
    <HandlerSets default="default">
      <Handlers Name="default">
        <Handler Alias="dataTypeHandler" Enabled="true" />
        <Handler Alias="languageHandler" Enabled="true" />
        <Handler Alias="macroHandler" Enabled="true" />
        <Handler Alias="mediaTypeHandler" Enabled="true" />
        <Handler Alias="memberTypeHandler" Enabled="true" />
        <Handler Alias="templateHandler" Enabled="true" />
        <Handler Alias="contentTypeHandler" Enabled="true" />
      </Handlers>
    </HandlerSets>
  </BackOffice>
</uSync>
```

Setting | Values | Note
--------|--------|------
Folder | Path to folder | Location in which uSync will save and read the exported files.
FlatFolders | true/false | Determines if uSync will store the files in a flat or structured folder structure.
ImportAtStartup | true/false | Should uSync run an import when the Umbraco site starts up (default: true).
ExportAtStartup | true/false | Should uSync run an export when the umbraco site starts up (default: false).
ExportOnSave | true/false | Should uSync produce an export when an item is saved inside Umbraco (default: true).
UseGuidFileNames | true/false | Should uSync use the guid of an item as its file name. This ensures there are no clashes in names, but makes it harder to manually read what settings are in a folder (default: false).
BatchSave | true/false | When doing a large import, save elements in batches. This feature exists to try and circumvent issues that can occur when Models Builder is enabled as lots of saves can cause a site to restart. 

For Handler Settings, see the [Handler Docs](../handlers).

### Setting the RootFolder Outside of Website Root
From v8.7.2, you can set the uSync folder to be saved outside of your website root. 
To enable this you also need to add the AllowUnsafe attribute on the folder. 

```xml title="/config/uSync8.config"
<Folder AllowUnsafe="True">C:\Test\uSync</Folder>
```

## Web.Config Overrides

You can override a number of the standard settings in the main config file, by setting values in the web.config file's `<AppSettings>` section.

```xml title="/web.config"
<!-- settings here override those in uSync8.config file -->
<add key="uSync.ImportAtStartup" value="true" />
<add key="uSync.ExportAtStartup" value="false" />
<add key="uSync.mediaFolder" value="/webconfigfolder"/>
<add key="uSync.FlatFolders" value="true" />
<add key="uSync.ExportOnSave" value="true" />
<add key="uSync.UseGuidFilenames" value="true" />
<add key="uSync.Folder" value="~/uSync/v82" />
<add key="uSync.DefaultHandlerSet" value="publish" /> 
```