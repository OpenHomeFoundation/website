# Open Home Foundation website

This is the source of the Open Home Foundation website.

## Manual deployement steps

```
script/build
```

On [cloudflare](https://dash.cloudflare.com/dc9f963dfa4a630ca83eda7ccd8f363d/pages/view/openhomefoundation-org):
* Create deployment, `[Production]`, and upload production build
* [Purge everything](https://dash.cloudflare.com/dc9f963dfa4a630ca83eda7ccd8f363d/openhomefoundation.org/caching/configuration)
