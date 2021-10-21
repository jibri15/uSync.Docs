---
title: Safe Media Names
---

:::caution 
v8.10+: This feature requires uSync.Complete 8.10 or greater
:::

When creating sync-packs or sending media between servers, uSync.Complete will store files in a temporary folder based on your Umbraco LocalTemp Settings.

The names of the config files for media can be based on the guid key of the items. However, media file names will remain as they are inside Umbraco. In some circumstances this can result in issues where path names exceed the `MAX_PATH` limit - this can result in a `Path not found` or `Path too long` error.

Starting with uSync.Complete v8.10, you can instruct uSync to generate a 'safe' name for the media files it stores in the temp folders and within syncpack files.

Within the uSync8.config file : 

```xml
<uSync>
    <!-- .... other settings -->
	<Complete>
		<SafeMediaNames>True</SafeMediaNames>
	</Complete>
    <!-- .... other settings -->
</uSync>
```

:::note
The default behavior in uSync.Complete 8.10 is false, so you will need to turn this on for the safe file names to be used. 

In future versions of uSync.Complete we intend to turn this feature on by default.
:::


