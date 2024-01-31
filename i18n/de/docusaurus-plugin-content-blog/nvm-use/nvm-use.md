---
slug: nvm-verwenden-2024
title: Elegante Verwendung von nvm zur Node.js-Verwaltung auf Mac im Jahr 2024
description: Node.js, als Grundlage für Frontend-Fähigkeiten, ist nicht mehr nur eine "JS-Server-Laufzeit".
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/nvm-use/cover.png
tags: [nvm, nodejs, mac, javascript]
date: 2024-01-03T10:00
---

Node.js, als Grundlage für Frontend-Fähigkeiten, ist nicht mehr nur eine "JS-Server-Laufzeit". Zahlreiche Tool-Bibliotheken, lokale Paketverwaltung, Mock-Umgebungen und mehr basieren auf Node.js und machen es damit wirklich zur Infrastruktur der Frontend-Welt.

Das blühende Ökosystem hat es für jeden unerlässlich gemacht, Node.js bei der Erstellung von Frontend-Projekten zu installieren. Mit der langen Geschichte von Produkten wird die Versionierung jedoch zu einem häufigen Problem - einige Projekte erfordern neue Versionen, während andere ältere benötigen. Die Verwaltung mehrerer Versionen von Node.js war eine anhaltende Herausforderung für Entwickler.

Aktuell adressiert das Open-Source-Tool nvm dieses Problem. Mit einfacher Befehlszeilenverwendung können Entwickler schnell zwischen verschiedenen Versionen von Node.js wechseln und sich auf die Entwicklung konzentrieren, anstatt Zeit für die Konfiguration der Umgebung zu verschwenden.

Die vorherrschenden Maschinen für die Frontendentwicklung sind immer noch Macbooks. Daher wird in diesem Artikel erklärt, wie man nvm auf Mac elegant installiert und verwendet, um Node.js-Versionen effizient zu verwalten.

## Empfehlung eines Open-Source-Projekts für die Backend-Entwicklung

[ILLA Cloud](https://illacloud.com) ist ein sofort einsatzbereites Low-Code-Tool, das die schnelle Erstellung interner Tools mit einfachem JS ermöglicht, ohne neue Projekte erstellen zu müssen.

- Web- und App-Admin-Panel
- Daten-Dashboard
- Individuelle B2B-Tools

Im Vergleich zu Szenarien, die mit Komponentenbibliotheken erstellt wurden, ermöglicht ILLA Cloud eine 10-fach schnellere Erstellung der genannten Tools. Darüber hinaus unterstützt ILLA Cloud die Zusammenarbeit mehrerer Benutzer und erleichtert die Teamarbeit zur schnellen Anpassung von Backend-Funktionen.

![dashboard](https://cdn.illacloud.com/illa-website/blog/nvm-use/dashboard.png)

## Einführung in nvm

⏬ GitHub-Repository: https://github.com/nvm-sh/nvm

⭐ GitHub Sterne: 72,4k

💪🏼 Erstveröffentlichungsdatum: 22. Dezember 2014

nvm ist ein Open-Source-Projekt, das seit fast 10 Jahren gepflegt wird. Positive Bewertungen haben dieses Projekt robust gehalten und durch kontinuierliche Wartung ist es zu einer perfekten Lösung für die "Node.js-Versionverwaltung" geworden.

## Installation von nvm

Da wir einen Mac für die Entwicklung verwenden, empfehle ich dringend, [Homebrew](https://brew.sh) für die Paketverwaltung zu verwenden und dann [Homebrew](https://brew.sh) zur Installation von nvm zu verwenden.

Um Homebrew zu installieren, wird empfohlen, das Installations-Skript zu verwenden. Es erfordert minimale Konfiguration und ermöglicht die sofortige Verwendung. Darüber hinaus erleichtert Homebrew das saubere Deinstallieren von Repositories, wenn dies erforderlich ist.

```shell
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Mit diesem Befehl wird die neueste Version von Homebrew installiert und behandelt automatisch die Installation der Xcode Command Tools in der macOS-Umgebung.

Natürlich ist all dies automatisiert. Nach kurzer Wartezeit können wir mit der Installation von nvm mit dem installierten Homebrew fortfahren.

```shell
> brew install nvm
```

Nach Bestätigung der Vereinbarung wird nvm vollständig installiert. Wenn Sie sich entscheiden, es nicht mehr zu wollen, können Sie den folgenden Befehl zum Deinstallieren verwenden:

```shell
# Löschen Sie nvm, wenn Sie es nicht mehr benötigen.
> brew uninstall nvm
```

## Verwendung von nvm

Sobald nvm installiert ist, sind hier einige häufig verwendete Befehle, um Ihnen den Einstieg zu erleichtern. Diese Befehle sollten Ihren täglichen Anforderungen gerecht werden.

```shell
> nvm list
```

Der "list"-Befehl zeigt verschiedene gängige Node.js-Versionen an. Sie können Versionen nach Bedarf installieren, und es zeigt auch die aktuell verwendete Node.js-Version auf Ihrem Gerät an. Es zeigt einige Codenamen an.

![nvm_list](https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-list.png)

Zum Beispiel ist "lts/gallim" der Versionsname für Node.js v16. Um mit diesem Codenamen zu installieren, wird nvm automatisch die neueste Version von v16 installieren. Das ist ziemlich praktisch. Sie können diesen Befehl auch verwenden, um die aktuell verwendete Version zu überprüfen.

Ein anderer Befehl ermöglicht es Ihnen, die aktuelle Node.js-Version zu überprüfen:

```shell
> node --version
```

Nach Eingabe dieses Befehls können Sie überprüfen, ob die Node.js-Version erfolgreich gewechselt wurde.

```shell
> nvm install stable
```

Der zweite Befehl installiert eine bestimmte Node.js-Version; "stable" bezieht sich auf eine bestimmte Versionsnummer. Sie können auch den Codenamen für eine bestimmte Version verwenden. Um "Node.js 18" zu installieren, würden Sie "nvm install 18" verwenden. Hier installiere ich die "stable"-Version. nvm wird automatisch die neueste stabile Version ermitteln und für mich installieren. Nach erfolgreicher Installation wird es automatisch zur installierten Version wechseln.

![stable-install](https://cdn.illacloud.com/illa-website/blog/nvm-use/stable-install.png)

Wo es einen Installationsbefehl gibt, gibt es auch einen Deinstallationsbefehl. Verwenden Sie:

```shell
> nvm uninstall stable
```

Um die entsprechende Version zu löschen.

![nvm-uninstall](https://cdn.illacloud.com/illa-website/blog

/nvm-use/nvm-uninstall.png)

Nachdem Sie gelernt haben, wie man installiert und deinstalliert, ist der nächste wichtige Schritt das Wechseln von Versionen.

```shell
> nvm use stable
```

Der "use"-Befehl ermöglicht es Ihnen, schnell zwischen den aktuell verwendeten Node.js-Versionen zu wechseln. Sie können auch den Codenamen "stable" verwenden. Auf diese Weise können Sie schnell zwischen Versionen für verschiedene Projekte wechseln.

![nvm-use](https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-use.png)

## Fazit

Dieser Artikel hat den gesamten Prozess für Anfänger erklärt, von der Installation bis zur Verwendung von nvm. Sie können es schnell ausprobieren und Ihre Node.js-Versionen besser verwalten.

Die Verwaltung von Node.js-Versionen ist ein lange diskutiertes Problem, und nvm ist ein ausgezeichnetes Open-Source-Projekt, das dieses Problem effektiv löst. Natürlich ist kein Projekt perfekt. Wenn Sie andere Empfehlungen haben, zögern Sie nicht, einen Kommentar zu hinterlassen und lassen Sie mehr Menschen von herausragenden Projekten wissen - das ist die Mission von Open-Source-Enthusiasten!