FROM node:lts as base
ENV FORCE_COLOR=0
RUN corepack enable
WORKDIR /opt/docusaurus

FROM base as prod
WORKDIR /opt/docusaurus
COPY ./package.json /opt/docusaurus/
COPY ./pnpm-lock.yaml /opt/docusaurus/
RUN pnpm install --frozen-lockfile
COPY ./build /opt/docusaurus/build
COPY ./docusaurus.config.ts /opt/docusaurus/

FROM prod as serve
EXPOSE 3000
CMD ["pnpm", "serve"]