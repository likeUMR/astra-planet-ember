# Astra planet author instructions

This repository authors one planet, not the universe renderer.
Read the canonical author contract before changing the generation API or adding shaders:

- Human guide: https://github.com/likeUMR/astra-universe/blob/main/CONTRIBUTING.md
- Detailed AI contract: https://github.com/likeUMR/astra-universe/blob/main/docs/AI_AUTHORING.md
- Protocol: https://github.com/likeUMR/astra-universe/blob/main/docs/PROTOCOL.md

Export `buildPlanet` using the host-provided THREE. Keep the root Group at identity,
CPU geometry and local effects within 2R, and marked surface vertices within 0.5R–1.5R.
Do not access the network, import dependencies, add assets, or alter the shared background,
lighting, camera, depth policy or postprocessing. Custom GLSL still requires review.
Keep far/near layouts consistent and retain the license.
