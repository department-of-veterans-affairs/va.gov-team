# CST Lighthouse Migration: Implementation Options

## Issue Summary

**GitHub Issue**: [#109199 - Migrate from VBMS to Lighthouse for CST claim letter downloads](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109199)

**Goal**: Migrate Claim Status Tool (CST) from legacy VBMS to new Lighthouse API endpoints for claim letter list and download functionality.

## Current Problem: Inefficient Download Pattern

When a Veteran clicks "Download letter", the current system makes **2 separate API calls**:

```mermaid
sequenceDiagram
    participant Veteran
    participant Frontend
    participant VetsAPI
    participant VBMS

    Veteran->>Frontend: Clicks "Download letter"
    Frontend->>VetsAPI: Download request
    
    VetsAPI->>VBMS: Call #1: Get metadata
    Note over VetsAPI,VBMS: Needs receivedAt for filename
    VBMS-->>VetsAPI: Letter metadata
    
    VetsAPI->>VBMS: Call #2: Download PDF
    VBMS-->>VetsAPI: PDF content
    
    VetsAPI-->>Frontend: PDF with filename
    Frontend-->>Veteran: File downloads
    
    Note over Veteran,VBMS: 2 API calls = slower downloads
```

## Implementation Options

### Option 1: Simple Migration (Keep Current Pattern)

**Approach**: Replace VBMS calls with Lighthouse calls but maintain the same 2-call pattern.

```mermaid
sequenceDiagram
    participant Veteran
    participant Frontend
    participant VetsAPI
    participant Lighthouse

    Veteran->>Frontend: Clicks "Download letter"
    Frontend->>VetsAPI: Download request
    
    VetsAPI->>Lighthouse: Call #1: /claim-letters/search
    Note over VetsAPI,Lighthouse: Still need metadata for filename
    Lighthouse-->>VetsAPI: Letter metadata
    
    VetsAPI->>Lighthouse: Call #2: /claim-letters/download
    Lighthouse-->>VetsAPI: PDF content
    
    VetsAPI-->>Frontend: PDF with filename
    Frontend-->>Veteran: File downloads
    
    Note over Veteran,Lighthouse: Still 2 API calls per download
```

**Pros:**
- ✅ Lowest development effort
- ✅ Direct API replacement
- ✅ Faster timeline to completion

**Cons:**
- ❌ Maintains inefficient pattern (50% slower downloads)
- ❌ No performance improvement for Veterans
- ❌ Higher API load on Lighthouse
 
**LOE**: Low

---

### Option 2: Interim Optimization (Cache Metadata)

**Approach**: Implement caching in `ClaimLetterDownloader` to avoid redundant metadata calls.

```mermaid
sequenceDiagram
    participant Veteran
    participant Frontend
    participant VetsAPI
    participant Cache
    participant Lighthouse

    Veteran->>Frontend: Clicks "Download letter"
    Frontend->>VetsAPI: Download request
    
    VetsAPI->>Cache: Check for metadata
    
    alt Cache Hit
        Cache-->>VetsAPI: Letter metadata
        VetsAPI->>Lighthouse: /claim-letters/download
        Lighthouse-->>VetsAPI: PDF content
    else Cache Miss
        VetsAPI->>Lighthouse: /claim-letters/search
        Lighthouse-->>VetsAPI: All letter metadata
        VetsAPI->>Cache: Store metadata
        VetsAPI->>Lighthouse: /claim-letters/download
        Lighthouse-->>VetsAPI: PDF content
    end
    
    VetsAPI-->>Frontend: PDF with filename
    Frontend-->>Veteran: File downloads
    
    Note over Veteran,Lighthouse: 1-2 calls depending on cache
```

**Pros:**
- ✅ Reduces API calls for subsequent downloads
- ✅ Performance improvement for Veterans
- ✅ Works with current Lighthouse endpoints

**Cons:**
- ❌ High development effort (caching logic, invalidation, storage)
- ❌ Added complexity and potential bugs
- ❌ Still some downloads require 2 calls (cache misses)

**LOE**: High

---

### Option 3: Wait for Optimized Endpoint

**Approach**: Wait for Lighthouse team to bundle metadata with download endpoint (~2 sprints).

```mermaid
sequenceDiagram
    participant Veteran
    participant Frontend
    participant VetsAPI
    participant Lighthouse

    Veteran->>Frontend: Clicks "Download letter"
    Frontend->>VetsAPI: Download request
    
    VetsAPI->>Lighthouse: /claim-letters/download (enhanced)
    Note over VetsAPI,Lighthouse: Single call returns PDF + metadata
    Lighthouse-->>VetsAPI: PDF content + metadata bundle
    
    VetsAPI-->>Frontend: PDF with filename
    Frontend-->>Veteran: File downloads
    
    Note over Veteran,Lighthouse: ✅ 1 API call = optimal performance
```

**Pros:**
- ✅ Optimal performance (1 API call per download)
- ✅ Cleanest implementation
- ✅ No complex caching logic needed
- ✅ Best long-term solution

**Cons:**
- ❌ Delayed migration timeline
- ❌ Dependency on Lighthouse team delivery
- ❌ Continues using legacy VBMS during wait

**Timeline**: 4-6 weeks (including 2 sprint wait)  
**LOE**: Low (after Lighthouse enhancement)

## Recommendation Matrix

| Factor | Option 1: Simple | Option 2: Cache | Option 3: Wait |
|--------|------------------|-----------------|----------------|
| **Performance** | Poor (2 calls) | Good (1-2 calls) | Excellent (1 call) |
| **Development Effort** | Low | High | Low |
| **Timeline** | 1-2 weeks | 3-4 weeks | 4-6 weeks |
| **Technical Risk** | Low | Medium | Low |
| **Long-term Value** | Low | Medium | High |
