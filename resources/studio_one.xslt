<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Studio One Collection</title>
                <link rel="stylesheet" type="text/css" href="css/styles.css"/>
            </head>
            <body>
                <h1>Studio One Albums Collection</h1>
                <table class="album-table">
                    <tr>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Country</th>
                        <th>Company</th>
                        <th>Song</th>
                        <th>Media</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    <xsl:for-each select="catalog/mp3">
                        <tr>
                            <td><xsl:value-of select="album"/></td>
                            <td><xsl:value-of select="artist"/></td>
                            <td><xsl:value-of select="country"/></td>
                            <td><xsl:value-of select="company"/></td>
                            <td><xsl:value-of select="song"/></td>
                            <td><xsl:value-of select="media"/></td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="price &gt; 10">
                                        <span class="highlight-red"><xsl:value-of select="price"/></span>
                                    </xsl:when>
                                    <xsl:when test="price &gt; 9">
                                        <span class="highlight-orange"><xsl:value-of select="price"/></span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="price"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                            <td><xsl:value-of select="year"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
